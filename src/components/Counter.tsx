import React, { useRef, useState, useEffect } from "react";
import { PlusSignIcon, MinusSignIcon } from "hugeicons-react";
interface Props{
  id:number,
  quantities:{ [key: number]: number } | null;
  addToQuantities:(id:number,qty:number)=>void;
}
const Counter: React.FC<Props> = ({id,quantities,addToQuantities}) => {
  const [number, setNumber] = useState<number>(1);
  

  useEffect(()=>{
    addToQuantities(id,number);
  },[number])
  
  
  const minus: () => void = () => {
    let currentNumber = number;
    if (currentNumber > 1) {
      setNumber(--currentNumber);
    }
  };
  const add: () => void = () => {
    let currentNumber = number;
    setNumber(++currentNumber);
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
        {number}
      </div>
      <button
        type="button"
        className="bg-white rounded-full px-1 py-1 shadow-md"
        onClick={add}
      >
        <PlusSignIcon size={16} />
      </button>
    </div>
  );
};

export default Counter;
