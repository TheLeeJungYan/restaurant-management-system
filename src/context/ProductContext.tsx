import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import PreLoader from "../components/PreLoader";
interface Product {
  ID: number;
  NAME: string;
  CATEGORY: string;
  PRICE: number;
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
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        if (!res.data || !Array.isArray(res.data)) return;

        const types: string[] = [
          ...new Set(res.data.map((product: Product) => product.CATEGORY)),
        ];
        setUniqueTypes(types);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        // setTimeout(() => {
        //   setLoading(false);
        // }, 2000);
      });
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
