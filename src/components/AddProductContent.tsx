import { ArrowLeft02Icon, CodesandboxIcon, Settings03Icon, Tick02Icon } from "hugeicons-react";

import { ArrowRight01Icon } from "hugeicons-react";
import MaintenanceHeader from "./MaintenanceHeader";
import AddIcon from "../assets/icons/Add"
import { Link } from "react-router-dom";
import InputContainer from "./InputContainer";
import DragAndDropFileInput from "./DragAndDropFileInput";
import ProductOptionsGroup from "./ProductOptionsGroup";
import { useContext } from "react";
import { AddProductContext } from "../context/AddProductContext";
const AddProductContent:React.FC = () =>{
    const context = useContext(AddProductContext);
    if(context == undefined) return;
    const { register } = context;
    const handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>void = (e) =>{
        e.preventDefault();
        console.log('submit');
    }
    return (
        <>
      <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
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
            <button type={'submit'} className="focus:ring focus:ring-green-500 focus:ring-offset-0 focus:ring-opacity-50 font-inter text-md items-center bg-green-600 px-3 text-white border h-fit *:py-2  rounded-md flex gap-2">
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
                {
                    ...register('name',{
                        required:"Product Name is required"
                    })
                }
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
                <ProductOptionsGroup />
              </InputContainer>
            </div>
            <div className="flex flex-col basis-1/3 gap-5 ">
              <InputContainer title={"Category"}>
                <select
                    {...register('category')}
                  className="border rounded-md py-2 px-2 font-poppins outline-0 text-gray-700"
                >
                  <option value="" disabled={true}>
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
                      {
                        ...register('price')
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
    //    </form>
    </>
    
    );
}

export default AddProductContent;