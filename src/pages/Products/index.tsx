import AuthLayout from "../../layouts/AuthLayout";
// import Products from "../../data/product";
import {
  Settings03Icon,
  ArrowRight01Icon,
  CodesandboxIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  FilterHorizontalIcon,
} from "hugeicons-react";

import AddButton from "../../components/AddButton";
import SearchBar from "../../components/SearchBar2";
import Button from "../../components/Button";
import Table from "../../components/Table/ProductsTable";
import MaintenanceHeader from "../../components/MaintenanceHeader";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../config";
import { Products } from "../../Types/type";
import SuccessMsg from "../../components/SuccessMsg";
import FlashState from "../../FlashState";
const ProductIndex: React.FC = () => {
  const [products,setProducts] = useState<Products[] | []>([]);

  const [successMessage,setSuccessMessage] = useState<null | string>(null);
  useEffect(()=>{
    fetchProduct();
  },[])

  useEffect(()=>{
    console.log('succ msg:'+successMessage);
  },[successMessage]);
  const authContext = useContext(AuthContext);
  if(authContext == undefined) return ;
  const { token } = authContext;
  const fetchProduct = async() =>{
    try{
      const response = await axios.get(`${BASE_URL}/products`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setProducts(response.data.data);
      const flashMessage = FlashState.get('product-success-msg');
      if(flashMessage){
        console.log(flashMessage);
        setSuccessMessage(flashMessage)
      }
    }catch(e){
      console.error(e)
    }
  }
 
  return (
    <AuthLayout>
      <MaintenanceHeader>
        <Settings03Icon size={24} className="text-gray-400" />
        <ArrowRight01Icon size={14} />
        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2 font-inter font-semibold">
          <CodesandboxIcon size={24} />
          <span>Products Management</span>
        </div>
      </MaintenanceHeader>

      <div className="flex-1 flex flex-col py-10 px-10">
        <SuccessMsg msg={successMessage}/>
        <div id="filter" className="bg-white py-5 rounded-xl border">
          <div className="flex px-5 ">
            <SearchBar />

            <div
              id="buttonField"
              className="flex px-4 items-center gap-2 ml-auto"
            >
              <Button
                text={"filter"}
                icon={<FilterHorizontalIcon size={16} />}
                className="mr-4 text-white bg-slate-400"
              />

              <Button text={"import"} icon={<CloudUploadIcon size={16} />} />
              <Button text={"export"} icon={<CloudDownloadIcon size={16} />} />
              <AddButton
                text={"Add Product"}
                location={"/product/create"}
              ></AddButton>
            </div>
          </div>
        </div>
        <Table products={products} />
      </div>
    </AuthLayout>
  );
};

export default ProductIndex;

