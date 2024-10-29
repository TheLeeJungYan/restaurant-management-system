import {
  Settings03Icon,
  ArrowRight01Icon,
  CodesandboxIcon,
  ArrowLeft02Icon,
  Tick02Icon,
} from "hugeicons-react";
import AddIcon from "../../assets/icons/Add";
import MaintenanceHeader from "../../components/MaintenanceHeader";
import AuthLayout from "../../layouts/AuthLayout";
import { Link } from "react-router-dom";
import InputContainer from "../../components/InputContainer";
import DragAndDropFileInput from "../../components/DragAndDropFileInput";
import ProductOptionGroup from "../../components/ProductOptionsGroup";
import "../../css/optionTable.css";
import AddProductProvider from "../../context/AddProductContext";
const ProductCreate: React.FC = () => {
  return (
    <AuthLayout>
      <AddProductProvider>
        <MaintenanceHeader>
          <Settings03Icon size={24} className="text-gray-400" />
          <ArrowRight01Icon size={14} />
          <CodesandboxIcon size={24} className="text-gray-400" />
          <ArrowRight01Icon size={14} />
          <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2 font-inter font-semibold">
            <AddIcon size={16} color={"#555"} />
            <span>Add New Product</span>
          </div>
        </MaintenanceHeader>
        <div className="flex-1 flex flex-col py-10 px-10">
          <Link
            to="/products"
            className="text-gray-900 bg-white w-fit py-3 px-3 rounded-md border hover:text-gray-600"
          >
            <ArrowLeft02Icon size={20} className="text-gray-500" />
          </Link>
          <div className="flex justify-between mt-5">
            <div className="flex flex-col">
              <span className="font-inters font-semibold text-3xl">
                Add New Product
              </span>
              <span className="font-poppins text-gray-500 mt-2 text-xs">
                This is the page where you can create a new product. Fill in the
                required details such as the product name, description, price,
                and etc...
              </span>
            </div>
            <button className="font-inter text-md items-center bg-green-600 px-3 text-white border h-fit *:py-2  rounded-md flex gap-2">
              <div>
                <Tick02Icon size={20} />
              </div>
              <div>Add Product</div>
            </button>
          </div>

          <div className="flex flex-1 gap-5 mt-5">
            <div className="flex flex-col flex-1 gap-5">
              <InputContainer title={"Basic Information"}>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="font-poppins px-4 py-3 border rounded-lg shadow-sm outline-0"
                />
                <textarea
                  name=""
                  id=""
                  rows={15}
                  placeholder="Descriptions"
                  className="font-poppins px-4 py-3 border rounded-lg shadow-sm outline-0 mt-5"
                ></textarea>
              </InputContainer>
              <InputContainer title={"Product Options"} productOption={true}>
                <ProductOptionGroup />
              </InputContainer>
            </div>
            <div className="flex flex-col basis-1/3 gap-5 ">
              <InputContainer title={"Category"}>
                <select
                  name=""
                  id=""
                  className="border rounded-md py-2 px-2 font-poppins outline-0 text-gray-700"
                >
                  <option value="" disabled>
                    Please Select category...
                  </option>
                </select>
                <Link to="#" className="font-poppins text-xs mt-2 underline">
                  <div className="no-underline flex items-center gap-0.5 justify-end">
                    <span>Create Category</span>
                  </div>
                </Link>
              </InputContainer>
              <InputContainer title={"Product Image"}>
                <DragAndDropFileInput />
              </InputContainer>

              <div className="bg-white rounded-md py-6 px-8 flex flex-col border">
                <span className="font-inter font-bold text-md">Pricing</span>
                <div className="mt-5 flex flex-col">
                  <label className="font-poppins px-4 *:py-3 border rounded-lg shadow-sm outline-0 flex">
                    <div className="border-r pr-4">RM</div>
                    <input
                      type="text"
                      className="flex-1 outline-0 px-2"
                      placeholder="0.00"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AddProductProvider>
    </AuthLayout>
  );
};
export default ProductCreate;
