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

  const {
    filteredProducts,
    uniqueTypes,
    productsWithQty,
    selectedCat,
    getImageUrl,
    getProImageUrl,
    updateSelectedCat,
    changeQuantityOfProduct,
  } = productContext;
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
    <div className="flex-1 flex flex-col py-5 overflow-x-hidden">
      <span className="font-nunito font-black text-gray-700 uppercase text-3xl px-3">
        menu
      </span>

      <div id="cat" className="flex mt-2 w-full items-center relative">
        <div className={`icon ${leftIconShow ? "flex" : "hidden"}`}>
          <div
            className="iconWrapper rounded-full px-2 py-2 bg-white shadow-lg text-gray-500 cursor-pointer ml-2"
            onClick={slideLeft}
          >
            <ArrowLeftDoubleIcon size={20} />
          </div>
        </div>
        <div
          ref={tabBox}
          id="tabBox"
          className="flex items-center overflow-x-hidden gap-2 px-3 py-3"
          onScroll={tabBoxScroll}
        >
          <button
            onClick={() => updateSelectedCat("All")}
            className={`capitalize select-none font-poppins font-semibold w-fit shrink-0 
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
                                select-none capitalize font-poppins font-semibold shrink-0
                                 text-sm rounded-full px-4 py-2 
                                cursor-pointer   transition-all flex gap-2`}
                  onClick={() => updateSelectedCat(type)}
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
      <div id="product" className="flex flex-row flex-wrap px-3 mt-2 ">
        {filteredProducts &&
          filteredProducts.map((p, index) => {
            const productWithQty = productsWithQty?.find(
              (item) => item.ID === p.ID
            );
            const quantity = productWithQty ? productWithQty.QTY : 0;
            return (
              <div key={index} className="basis-1/3 px-2 py-2 shrink-0">
                <div className="product bg-white flex flex-col overflow-hidden rounded-xl border cursor-pointer hover:shadow-lg h-full transition-all duration-500">
                  <div className="overflow-hidden">
                    <img
                      src={getProImageUrl(p.ID)}
                      className="w-full object-cover h-60 productImg"
                    ></img>
                  </div>
                  <div className="flex flex-col px-4 py-2">
                    <div className="flex mt-1">
                      <span className="font-semibold font-inter text-xl text-gray-600 ">
                        {p.NAME}
                      </span>
                    </div>
                    <div className="flex bg-gray rounded-lg px-3 py-1 bg-gray-100 w-fit capitalize font-poppins  font-semibold  text-gray-600 text-sm">
                      {p.CATEGORY}
                    </div>
                    <div className="flex font-poppins items-center gap-2 text-gray-500 price mt-3">
                      RM{p.PRICE}
                    </div>

                    <div className="flex justify-between items-center">
                      <Counter
                        id={p.ID}
                        qty={quantity}
                        changeQuantityOfProduct={changeQuantityOfProduct}
                      />
                      <BasketBtn id={p.ID} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
