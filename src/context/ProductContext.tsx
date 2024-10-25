import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import productsData from "../data/product";
import PreLoader from "../components/PreLoader";
interface Product {
  ID: number;
  NAME: string;
  PRICE: number;
  CATEGORY: string;
}

interface BasketPro {
  ID: number;
  NAME: string;
  QTY: number;
  PRICE: number;
  TOTAL_PRICE: number;
}

interface ProductWithQty {
  ID: number;
  QTY: number;
}
interface productContextType {
  filteredProducts: Product[] | null;
  uniqueTypes: string[] | null;
  orderSelection: string;
  customerOrTable: string | null;
  productsWithQty: ProductWithQty[] | null;
  selectedCat: string;
  searchQuery: string | null;
  basketProducts: BasketPro[] | [];
  tax: number;
  changeOrderSelection: (selection: string) => void;
  getImageUrl: (name: string) => string;
  getProImageUrl: (id: number) => string;
  customerOrTableInput: (value: string) => void;
  changeQuantityOfProduct: (id: number, quantity: number) => void;
  updateSearchQuery: (value: string) => void;
  updateSelectedCat: (value: string) => void;
  addProductToBasket: (id: number) => void;
  removeProductFromBasket: (id: number) => void;
  changeQuantityOfProductInBasket: (id: number, quantity: number) => void;
}
export const ProductContext = createContext<productContextType | undefined>(
  undefined
);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [basketProducts, setBasketProducts] = useState<BasketPro[] | []>([]);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [productsWithQty, setProductsWithQty] = useState<
    ProductWithQty[] | null
  >(null);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [uniqueTypes, setUniqueTypes] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [orderSelection, setOrderSelection] = useState<string>("Customer");
  const [customerOrTable, setCustomerOrTable] = useState<string | null>("");
  const tax: number = 10;
  const getImageUrl: (name: string) => string = (name) => {
    return new URL(`../assets/icons/${name}.svg`, import.meta.url).href;
  };

  const getProImageUrl: (id: number) => string = (id) => {
    return new URL(`../assets/products/${id}.jpg`, import.meta.url).href;
  };

  const changeOrderSelection: (selection: string) => void = (selection) => {
    setOrderSelection(selection);
  };

  const customerOrTableInput: (value: string) => void = (value) => {
    setCustomerOrTable(value);
  };

  const changeQuantityOfProduct: (id: number, quantity: number) => void = (
    id,
    quantity
  ) => {
    const newProductsWithQty = productsWithQty?.map((p) => {
      if (p.ID === id) {
        return { ...p, QTY: quantity };
      }
      return p;
    });
    setProductsWithQty(newProductsWithQty || null);
  };
  const changeQuantityOfProductInBasket: (
    id: number,
    quantity: number
  ) => void = (id, quantity) => {
    const newProductInBasket = basketProducts?.map((p) => {
      if (p.ID === id) {
        return {
          ...p,
          QTY: quantity,
          TOTAL_PRICE: quantity * p.PRICE,
        };
      }
      return p;
    });
    setBasketProducts(newProductInBasket);
  };
  const removeProductFromBasket: (id: number) => void = (id) => {
    setBasketProducts((prevBasket) =>
      prevBasket.filter((item) => item.ID !== id)
    );
  };
  const updateSearchQuery: (value: string) => void = (value) => {
    setSearchQuery(value);
  };

  const updateSelectedCat: (value: string) => void = (value) => {
    setSelectedCat(value);
  };

  const addProductToBasket: (id: number) => void = (id) => {
    const productWithQty = productsWithQty?.find((p) => p.ID === id);
    const productInfo = products?.find((p) => p.ID === id);
    if (!productWithQty || !productInfo) return;

    setBasketProducts((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.ID === id);
      if (existingItem) {
        return prevBasket.map((item) =>
          item.ID === id
            ? {
                ...item,
                QTY: item.QTY + productWithQty.QTY,
                TOTAL_PRICE:
                  (item.QTY + productWithQty.QTY) * productInfo.PRICE,
              }
            : item
        );
      } else {
        return [
          ...prevBasket,
          {
            ID: productInfo.ID,
            NAME: productInfo.NAME,
            QTY: productWithQty.QTY,
            PRICE: productInfo.PRICE,
            TOTAL_PRICE: productWithQty.QTY * productInfo.PRICE, // Initialize total price
          },
        ];
      }
    });
  };
  useEffect(() => {
    setLoading(false);

    setProducts(productsData);
    const newData = productsData.map((p) => {
      return {
        ID: p.ID,
        QTY: 1,
      };
    });
    setProductsWithQty(newData);
    if (!productsData) return;

    const types: string[] = [
      ...new Set(productsData.map((product: Product) => product.CATEGORY)),
    ];

    setUniqueTypes(types);
    // axios
    //   .get(`${BASE_URL}/products`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setProducts(res.data);
    //     if (!res.data || !Array.isArray(res.data)) return;

    //     const types: string[] = [
    //       ...new Set(res.data.map((product: Product) => product.CATEGORY)),
    //     ];
    //     setUniqueTypes(types);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching products:", error);
    //   })
    //   .finally(() => {
    //     setLoading(false);

    //   });
  }, []);
  if (loading) {
    return <PreLoader />;
  }
  const filteredProducts =
    products?.filter((product) => {
      const searchPrice = parseFloat(searchQuery || "");
      return (
        (selectedCat.toLowerCase() === "all" ||
          product.CATEGORY.toLowerCase() === selectedCat.toLowerCase()) &&
        (product.NAME.toLowerCase().includes(
          searchQuery?.toLowerCase() || ""
        ) ||
          product.CATEGORY.toLowerCase().includes(
            searchQuery?.toLowerCase() || ""
          ) ||
          product.PRICE === searchPrice)
      );
    }) || [];
  return (
    <ProductContext.Provider
      value={{
        tax,
        filteredProducts,
        uniqueTypes,
        getImageUrl,
        getProImageUrl,
        orderSelection,
        changeOrderSelection,
        customerOrTable,
        customerOrTableInput,
        productsWithQty,
        changeQuantityOfProduct,
        searchQuery,
        updateSearchQuery,
        selectedCat,
        updateSelectedCat,
        basketProducts,
        addProductToBasket,
        removeProductFromBasket,
        changeQuantityOfProductInBasket,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
