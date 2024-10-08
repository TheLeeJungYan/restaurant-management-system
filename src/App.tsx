import "./App.css";
import Sidebar from "./components/Sidebar";
import products from "./data/product";
import Menu from "./components/Menu";
import React, { useState, createContext, useEffect } from "react";
import UserImg from "./assets/images/user.jpg";
import { Search01Icon } from "hugeicons-react";
interface BasketContextType {
  addToQuantities: (id: number, qty: number) => void;
  addToBasket: (id: number) => void;
}

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  type: string;
}
const BasketContext = createContext<BasketContextType | null>(null);
const App: React.FC = () => {
  const [sideBarExpand, setSideBarExpand] = useState<boolean>(false);

  const toggleSideBar: () => void = () => {
    setSideBarExpand(!sideBarExpand);
  };

  const [quantities, setQuantities] = useState<{
    [key: number]: number;
  } | null>({});
  const [basketItems, setBasketItems] = useState<object[]>([]);
  const addToQuantities: (id: number, qty: number) => void = (id, qty) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: qty,
    }));
  };

  const addToBasket: (id: number) => void = (id) => {
    const currentPro: Product | undefined = products.find((i) => i.id === id);

    if (currentPro) {
      console.log(quantities![currentPro.id]);
      // setBasketItems((prevItems) => [
      //   ...prevItems,
      //   {
      //     id: id,
      //     name: currentPro.name,
      //     price: currentPro.price,
      //   },
      // ]);
    }
  };

  useEffect(() => {}, [basketItems]);
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex ">
      <Sidebar toggleSideBar={toggleSideBar} sideBarExpand={sideBarExpand} />
      <BasketContext.Provider value={{ addToQuantities, addToBasket }}>
        <div
          className={`flex-1 flex-col flex py-10 px-10 w-full overflow-hidden ${
            sideBarExpand ? "sideBarExpand" : "sidebarCollapse"
          }`}
        >
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
          <Menu products={products} />
        </div>
      </BasketContext.Provider>
    </div>
  );
};

export { App, BasketContext };
