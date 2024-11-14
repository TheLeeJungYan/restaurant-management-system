import { InformationCircleIcon } from "hugeicons-react";
import AddIcon from "../assets/hugeIcons/Add";
import React, { useContext } from "react";
import { AddProductContext } from "../context/AddProductContext";
interface Options {
  name: string;
  seq: number;
}
interface Props {
  children: React.ReactNode;
  title: string;
  productOption?: boolean;
}
const InputContainer: React.FC<Props> = ({
  children,
  title,
  productOption,
}) => {
  const addProductContext = useContext(AddProductContext);
  if (addProductContext == undefined) return;
  const { appendOptionGroup } = addProductContext;
  const addOptionGroup: () => void = () => {
    appendOptionGroup({
      name: "",
      collapse: false,
      default: "0",
      options: [{ option: "", desc: "", price: "0.00" }],
    });
  };
  return (
    <div className="bg-white rounded-xl shadow-sm py-6 px-8 flex flex-col border">
      <div className="flex items-center justify-between">
        <div className="font-inter font-bold text-md relative text-gray-700">
          {title}
          {productOption && (
            <InformationCircleIcon
              size={12}
              className="absolute top-0"
              style={{ right: "-15px" }}
            />
          )}
        </div>
        {productOption && (
          <button
            type={"button"}
            onClick={addOptionGroup}
            className="bg-gray-100 border-gray-300 hover:bg-gray-50 border *:py-2 rounded-md font-poppins flex items-center"
          >
            <div className="px-2 border-r border-gray-300">
              <AddIcon size={16} color={"#555"} />
            </div>
            <div className="px-3 text-sm">New Option Group</div>
          </button>
        )}
      </div>
      <div className="mt-5 flex flex-col">{children}</div>
    </div>
  );
};

export default InputContainer;
