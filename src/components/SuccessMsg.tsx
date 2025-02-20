import { Cancel01Icon } from "hugeicons-react";
import Success from "../assets/hugeIcons/Success";
import { useEffect, useRef, useState } from "react";
const SuccessMsg: React.FC<{ msg: string | null }> = ({ msg }) => {
  const [message, setMessage] = useState<null | string>(null);
  const timer = useRef<undefined | number>(undefined);
  useEffect(() => {
    if (msg) {
      setMessage(msg);
      timer.current = setTimeout(() => {
        setMessage(null);
      }, 5000);

      return () => clearTimeout(timer.current);
    }
  }, [msg]);

  return (
    <div
      className={`flex rounded-xl mb-2 font-poppins  bg-green-200/50 items-center transition-all duration-1000 overflow-hidden ${
        message ? " border h-20 opacity-1" : "h-0 opacity-0"
      }`}
    >
      <div className="bg-green-600 rounded-full p-2 shadow-lg shadow-green-600/60 items-center justify-center ml-4">
        <Success size={16} color={"#fff"} />
      </div>
      <div className="flex-1 flex-col ml-5">
        <div className="font-inter font-bold text-green-900 text-lg">
          Success !
        </div>
        <div className="font-poppins text-xs text-green-800">{message}</div>
      </div>
      <button
        type="button"
        className="ml-auto text-gray-400 hover:text-gray-600 mr-4"
        onClick={() => {
          setMessage(null);
          return () => clearTimeout(timer.current);
        }}
      >
        <Cancel01Icon size={16} className="" />
      </button>
    </div>
  );
};
export default SuccessMsg;
