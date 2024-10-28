import { InformationCircleIcon } from "hugeicons-react";
import AddIcon from "../assets/icons/Add";

interface Options {
  name: string;
  seq: number;
}
interface Props {
  children: React.ReactNode;
  title: string;
  productOption?: boolean;
  setOption?: React.Dispatch<React.SetStateAction<[] | Options[]>>;
}
const InputContainer: React.FC<Props> = ({
  children,
  title,
  productOption,
  setOption,
}) => {
  const addOption: () => void = () => {
    if (setOption == undefined) return;
    setOption((prevOptions) => [
      ...prevOptions,
      {
        seq: 1,
        name: "adad",
      },
    ]);
  };
  return (
    <div className="bg-white rounded-md py-6 px-8 flex flex-col border">
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
            onClick={addOption}
            className="bg-gray-100 border-gray-300 border *:py-2 rounded-md font-poppins flex items-center"
          >
            <div className="px-2 border-r border-gray-300">
              <AddIcon size={16} color={"#555"} />
            </div>
            <div className="px-2">New Options</div>
          </button>
        )}
      </div>
      <div className="mt-5 flex flex-col">{children}</div>
    </div>
  );
};

export default InputContainer;
