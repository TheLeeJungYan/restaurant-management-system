import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import productsData from "../data/product"
import PreLoader from "../components/PreLoader";
interface Product {
  ID: number;
  NAME: string;
  IMG: string;
  PRICE: number;
  CATEGORY: string;
}
interface productContextType {
  products: Product[] | null;
  uniqueTypes: string[] | null;
  getImageUrl: (name: string) => string;
}
export const ProductContext = createContext<productContextType | undefined>(
  undefined
);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [uniqueTypes, setUniqueTypes] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const getImageUrl: (name: string) => string = (name) => {
    return new URL(`../assets/icons/${name}.svg`, import.meta.url).href;
  };
  useEffect(() => {
    setLoading(false);
 
    setProducts(productsData)
    // setProducts(productsData as unknown as Product[]);
    
    if(!productsData) return;
   
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
  return (
    <ProductContext.Provider
      value={{
        products,
        uniqueTypes,
        getImageUrl,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
