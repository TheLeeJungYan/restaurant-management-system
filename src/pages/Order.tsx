
import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import { Search01Icon } from "hugeicons-react";
import UserImg from "../assets/images/user.jpg";
import OrderProvider from "../context/ProductContext";
import Menu from "../components/Menu";
const Order: React.FC = () => {
  return (
    <AuthLayout>
      <OrderProvider>
        <header className="flex items-center">
          <label
            id="search"
            className="border flex items-center bg-white rounded-full overflow-hidden py-2.5 px-4 gap-2 font-poppins min-w-96"
          >
            <Search01Icon size={20} className="text-gray-400" />
            <input
              type="text"
              name=""
              id=""
              className="flex-1 outline-0 text-gray-800 relative truncate"
              style={{ top: ".5px" }}
              placeholder="Search..."
            />
          </label>

          <div className="ml-auto bg-white rounded-full p-2 border border-gray-200 cursor-pointer flex gap-2 items-center">
            <img
              src={UserImg}
              alt=""
              className="rounded-full h-12 w-12 object-cover flex-1"
            />
          </div>
        </header>
        <Menu />
      </OrderProvider>
    </AuthLayout>
  );
};

export default Order;
