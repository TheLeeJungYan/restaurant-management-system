import React from "react";
import { PlusSignIcon, MinusSignIcon } from "hugeicons-react";

interface Props {
  id: number;
  qty: number;
  changeQuantityOfProduct: (id: number, qty: number) => void;
}
// const Counter: React.FC<Props> = ({ id, addToQuantities }) => {
const Counter: React.FC<Props> = ({ id, qty, changeQuantityOfProduct }) => {
  // const [number, setNumber] = useState<number>(qty);

  const minus: () => void = () => {
    const newQty: number = --qty;
    if (newQty > 0) {
      changeQuantityOfProduct(id, newQty);
    }
  };
  const add: () => void = () => {
    const newQty: number = ++qty;
    changeQuantityOfProduct(id, newQty);
  };
  return (
    <div className="bg-gray-200 px-1 py-1 w-fit rounded-full flex items-center gap-3 mt-1 ">
      <button
        type="button"
        className="bg-white rounded-full px-1 py-1 shadow-md"
        onClick={minus}
      >
        <MinusSignIcon size={16} />
      </button>
      <div className="font-poppins text-sm w-5 flex items-center justify-center">
        {qty}
      </div>
      <button
        type="button"
        className="bg-white rounded-full px-1 py-1 shadow-md h"
        onClick={add}
      >
        <PlusSignIcon size={16} />
      </button>
    </div>
  );
};

export default Counter;
