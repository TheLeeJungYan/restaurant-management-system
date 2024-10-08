import BasketIcon from "../assets/icons/basket.svg";
interface props {
  basketBtnClick: (id: number) => void;
  id: number;
}
const BasketBtn: React.FC<props> = ({ basketBtnClick, id }) => {
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
        basketBtnClick(id);
      }}
    >
      <img src={BasketIcon} className="w-5 h-5" />
    </button>
  );
};

export default BasketBtn;
