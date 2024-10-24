import React, { useRef, useState, useContext, useEffect } from "react";
import "../css/menu.css";
import DishIcon from "../assets/icons/dish.svg";
import Counter from "../components/Counter";
import BasketBtn from "../components/BasketBtn";
import { ProductContext } from "../context/ProductContext";
import { ArrowLeftDoubleIcon, ArrowRightDoubleIcon } from "hugeicons-react";
interface Product {
  ID: number;
  NAME: string;
  CATEGORY: string;
  PRICE: number;
}

const Menu: React.FC = () => {
  const [leftIconShow, setLeftIconShow] = useState<boolean>(false);
  const [rightIconShow, setRightIconShow] = useState<boolean>(false);
  const tabBox = useRef<HTMLDivElement>(null);
  const productContext = useContext(ProductContext);
  useEffect(() => {
    const checkingTabBoxSize: () => void = () => {
      if (tabBox.current!.clientWidth >= tabBox.current!.scrollWidth) {
        setRightIconShow(false);
      } else {
        setRightIconShow(true);
      }
    };
    checkingTabBoxSize();
    window.addEventListener("resize", checkingTabBoxSize);
    return () => {
      window.removeEventListener("resize", checkingTabBoxSize);
    };
  }, []);

  if (productContext === undefined) {
    return <div>Loading...</div>;
  }
  const { products, uniqueTypes, getImageUrl } = productContext;
  const slideRight: () => void = () => {
    tabBox.current!.scrollLeft += 300;
  };

  const slideLeft: () => void = () => {
    tabBox.current!.scrollLeft -= 300;
  };
  const tabScroll: () => void = () => {
    handleIcons();
  };
  const handleIcons: () => void = () => {
    const tempScrollValue: number = tabBox.current!.scrollLeft;
    const scrollValue: number = Math.round(tempScrollValue);
    const maxScrollWidth: number =
      tabBox.current!.scrollWidth - tabBox.current!.clientWidth;

    if (scrollValue > 0) {
      setLeftIconShow(true);
    } else {
      setLeftIconShow(false);
    }

    if (scrollValue >= maxScrollWidth) {
      setRightIconShow(false);
    } else {
      setRightIconShow(true);
    }
  };
  return (
    <div className="flex-1 flex flex-col py-5  w-full overflow-x-hidden">
      <span className="font-nunito font-black text-gray-700 uppercase text-3xl px-3">
        menu
      </span>

      <div id="cat" className="flex mt-2 w-full items-center  relative">
        <div className={`icon ${leftIconShow ? "flex" : "hidden"}`}>
          <div
            className="iconWrapper bg-white rounded-full px-2 py-2 bg-white shadow-lg text-gray-500 cursor-pointer ml-2"
            onClick={slideLeft}
          >
            <ArrowLeftDoubleIcon size={20} />
          </div>
        </div>
        <div
          ref={tabBox}
          id="tabBox"
          className="flex items-center overflow-x-hidden gap-2 px-3 py-3"
          onScroll={tabScroll}
        >
          <div
            className="capitalize font-poppins font-semibold w-fit shrink-0
                                 text-sm rounded-full  px-4 py-2 bg-primaryColor text-white cursor-pointer shadow-md shadow-primaryColor flex gap-2"
          >
            <img
              src={DishIcon}
              className="w-4 h-4 object-contain flex-1 shrink-0"
            ></img>
            <span className="flex-1 shrink-0">All</span>
          </div>
          {uniqueTypes &&
            uniqueTypes.map((type, index) => {
              return (
                <div
                  key={index}
                  className={`
                                capitalize font-poppins font-semibold shrink-0
                                 text-sm rounded-full px-4 py-2 
                                cursor-pointer  bg-gray-200 text-gray-700 hover:bg-gray-300  transition-all flex gap-2`}
                >
                  <img
                    src={getImageUrl(type) ? getImageUrl(type) : ""}
                    className="w-4 h-4 object-contain"
                  ></img>
                  <span>{type}</span>
                </div>
              );
            })}
        </div>
        <div className={`icon ${rightIconShow ? "flex" : "hidden"}`}>
          <div
            className="iconWrapper  rounded-full px-2 py-2 bg-white shadow-lg text-gray-500 border cursor-pointer mr-2"
            onClick={slideRight}
          >
            <ArrowRightDoubleIcon size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
