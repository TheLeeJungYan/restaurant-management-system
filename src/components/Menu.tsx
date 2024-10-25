import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import DishIcon from "../assets/icons/dish.svg";
import Counter from "../components/Counter";
import BasketBtn from "../components/BasketBtn";
import { ProductContext } from "../context/ProductContext";
import { ArrowLeftDoubleIcon, ArrowRightDoubleIcon } from "hugeicons-react";
import "../css/menu.css";
interface Product {
  ID: number;
  NAME: string;
  CATEGORY: string;
  PRICE: number;
}

const Menu: React.FC = () => {
  const [leftIconShow, setLeftIconShow] = useState<boolean>(false);
  const [rightIconShow, setRightIconShow] = useState<boolean>(false);
  const [selectedCat, setSelectedCat] = useState<string>("All");
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
  const tabBoxScroll: () => void = () => {
    handleIcons();
  };

  const handleIcons: () => void = () => {
    const tempScrollValue: number = tabBox.current!.scrollLeft;
    const scrollValue: number = Math.round(tempScrollValue) + 1;
    const maxScrollWidth: number =
      tabBox.current!.scrollWidth - tabBox.current!.clientWidth;
    console.log({ scrollValue, maxScrollWidth });

    if (scrollValue > 1) {
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
    <div className="flex-1 flex flex-col py-5 ">
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
          className="flex items-center  gap-2 px-3 py-3"
          onScroll={tabBoxScroll}
        >
          <button
            onClick={() => setSelectedCat("All")}
            className={`capitalize font-poppins font-semibold w-fit shrink-0 
                                 text-sm rounded-full  px-4 py-2  cursor-pointer  flex gap-2 ${
                                   selectedCat == "All"
                                     ? "bg-primaryColor text-white shadow-md shadow-primaryColor"
                                     : "bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-sm"
                                 }`}
          >
            <img
              src={DishIcon}
              className="w-4 h-4 object-contain flex-1 shrink-0"
            ></img>
            <span className="flex-1 shrink-0">All</span>
          </button>
          {uniqueTypes &&
            uniqueTypes.map((type, index) => {
              return (
                <button
                  key={index}
                  className={`  ${
                    selectedCat == type
                      ? "bg-primaryColor text-white shadow-md shadow-primaryColor"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-sm"
                  }
                                capitalize font-poppins font-semibold shrink-0
                                 text-sm rounded-full px-4 py-2 
                                cursor-pointer   transition-all flex gap-2`}
                  onClick={() => setSelectedCat(type)}
                >
                  <img
                    src={getImageUrl(type) ? getImageUrl(type) : ""}
                    className="w-4 h-4 object-contain"
                  ></img>
                  <span>{type}</span>
                </button>
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
