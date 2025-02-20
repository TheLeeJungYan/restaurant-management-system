import React, { useContext } from "react";
import AuthLayout from "../layouts/AuthLayout";

import UserImg from "../assets/images/user.jpg";
import ProductProvider from "../context/ProductContext";
import SearchBar from "../components/SearchBar";

import Menu from "../components/Menu";
import Basket from "../components/Basket";
const Order: React.FC = () => {
  return (
    <AuthLayout>
      <ProductProvider>
        <div className="flex flex-col flex-1 py-10 px-5">
          <header className="flex items-center">
            <SearchBar />
            <div className="ml-auto bg-white rounded-full p-2 border border-gray-200 cursor-pointer flex gap-2 items-center">
              <img
                src={UserImg}
                alt=""
                className="rounded-full h-12 w-12 object-cover flex-1"
              />
            </div>
          </header>
          <div className="flex  ">
            <Menu />
            <Basket />
          </div>
        </div>
      </ProductProvider>
    </AuthLayout>
  );
};

export default Order;
