import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthLayout from '../../layouts/AuthLayout';
import PreLoader from '../../components/PreLoader';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { Products,ViewOptionGroups } from "../../Types/type"
import MaintenanceHeader from '../../components/MaintenanceHeader';
import { Settings03Icon , CodesandboxIcon , ArrowRight01Icon} from "hugeicons-react"
import AddIcon from "../../assets/hugeIcons/Add"
const ProductView:React.FC = ()=>{
    const { id } = useParams();
    const [fetching,setFetching] = useState<boolean>(true);
    const [product,setProduct] = useState<null | Products>(null);
    const [optionGroups,setOptionGroups] = useState<null | ViewOptionGroups>(null);

    const authContext = useContext(AuthContext);
    if(authContext == undefined) return ;
    const {token} = authContext;
    const fetchProduct = async()=>{
        try{
            const response =  await axios.get(`${BASE_URL}/product/${id}`,{
                headers:{
                  Authorization: `Bearer ${token}`
                }
              });
              setProduct(response.data.data.product);
              setOptionGroups(response.data.data.options);
              setFetching(false);
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        fetchProduct();
    },[])

    if(fetching){
        return <PreLoader/>
    } 
    return <AuthLayout>
         <MaintenanceHeader>
          <Settings03Icon size={24} className="text-gray-400" />
          <ArrowRight01Icon size={14} />
          <CodesandboxIcon size={24} className="text-gray-400" />
          <ArrowRight01Icon size={14} />
          <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2 font-inter font-semibold">
          
            <span>{product?.name}</span>
          </div>
        </MaintenanceHeader>
        <div className="flex-1 flex flex-col py-10 px-10">
          <Link
            to="/products"
            className="flex gap-1.5 hover:no-underline hover:text-gray-500 text-gray-400 font-poppins items-center"
          >  <span className="text-lg">⟵</span><span className="">Back to product</span></Link>
          <div className="flex mt-2 gap-5 flex-1">
                <div className="h-full flex flex-col px-2 items-center w-1/3 justify-center">
                    <img src={product?.image_url} alt="" className="object-cover rounded-md shadow-md shadow-gray-200 min-w-96"/>
                    <a href={product?.image_url} className="font-poppins break-all text-xs mt-3">{product?.image_url}</a>
                </div>
                
            </div>
        </div>
        
    </AuthLayout>
}

export default ProductView;