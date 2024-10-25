import { useContext } from "react";
import BasketIcon from "../assets/icons/basket.svg";
import { ProductContext } from "../context/ProductContext";
interface props {
  id: number;
}
const BasketBtn: React.FC<props> = ({ id }) => {
  const productContext = useContext(ProductContext);
  if (productContext == undefined) return null;
  const { addProductToBasket } = productContext;
  return (
    <button
      className="transition-all bg-primaryColor h-fit rounded-full px-2 py-2 text-white shadow-md shadow-primaryColor 
        hover:bg-primaryColor/90
        focus:translate-y-0.5
        focus:shadow-none
        focus:ring
        focus:ring-primaryColor/30
      "
      onClick={() => {
        addProductToBasket(id);
      }}
    >
      <img src={BasketIcon} className="w-5 h-5" />
    </button>
  );
};

export default BasketBtn;
