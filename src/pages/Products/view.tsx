import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthLayout from '../../layouts/AuthLayout';
import PreLoader from '../../components/PreLoader';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { Products,ViewOptionGroups } from "../../Types/type"
import MaintenanceHeader from '../../components/MaintenanceHeader';
import { Settings03Icon , CodesandboxIcon , ArrowRight01Icon, ArrowDown01Icon} from "hugeicons-react"
import AddIcon from "../../assets/hugeIcons/Add"
import InputContainer from '../../components/InputContainer';
const ProductView:React.FC = ()=>{
    const { id } = useParams();
    const [fetching,setFetching] = useState<boolean>(true);
    const [product,setProduct] = useState<null | Products>(null);
    const [optionGroups,setOptionGroups] = useState<null | ViewOptionGroups[]>(null);
    const [expandedGroups, setExpandedGroups] = useState<{[key: number]: boolean}>({});
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
              console.log(response.data.data.options);
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
        <div className="flex-1 flex flex-col py-10 px-10 2xl:px-40">
          <Link
            to="/products"
            className="flex gap-1.5 hover:no-underline hover:text-gray-500 text-gray-400 font-poppins items-center"
          >  <span className="text-lg">⟵</span><span >Back to product</span></Link>
          <div className="flex flex-1 flex-col mt-5">
            <span className="font-inters font-semibold text-3xl tracking-wider">
                {product?.name}
            </span>
            <div className="flex-1 mt-5 flex gap-5">
              <div className="flex flex-col basis-1/3 gap-5">
                <img src={product?.image_url} alt="" className="rounded-lg shadow-md" />
                <div className="border-t flex flex-col py-2 border-gray-200">
                  <div className="italic font-inter text-md">Description</div>
                  <div className="mt-4 font-poppins text-gray-500">{product?.description}</div>
                </div>
              </div>
              <div className="flex-1 rounded-md py-2 px-10">
                <div className="flex gap-2 items-end">
                  <div className="text-6xl font-poppins font-semibold">RM <span className="font-inter font-normal">{product?.price}</span></div><div className="bg-gray-200 px-3 py-1 rounded-md font-poppins">Price</div>
                </div>
                <div className="mt-5 rounded-md font-poppins bg-gray-200 w-fit px-2 py-2">
                  {product?.category}
                </div>
                <div className="mt-5 rounded-md border-t">
                  <div className="font-poppins font-bold mt-4">Product Options :</div>
                  <div className="flex flex-col mt-5 gap-4">
                  {
                      optionGroups && 
                      optionGroups.map((group,index)=>(
                        <div key={index} className="flex flex-col">
                          <div className="flex items-center gap-2  *:py-2 border border-gray-300 rounded-lg overflow-hidden bg-gray-200 text-gray-600">
                            <div className="flex items-center justify-center font-bold border-r border-gray-300 px-4">{index+1}</div>
                            <div className="font-inter font-bold pl-2">{group.name}</div>
                            <button className={`ml-auto px-2 ${expandedGroups[index] ? 'rotate-180' : ''}`} onClick={() => setExpandedGroups(prev => ({
                                ...prev, 
                                [index]: !prev[index]
                            }))} ><ArrowDown01Icon size={18}/></button>
                          </div>
                          <div className={`flex-col ${expandedGroups[index] ? 'flex bg-white mt-2 rounded-xl overflow-hidden border' : 'hidden'}`}>
                            <table className="mt-10">
                              <thead className="*:bg-gray-200  *:py-3 *:px-10 *:text-left">
                                <th className="">Options</th>
                                <th className="">Description</th>
                                <th className="">Price</th>
                              </thead>
                              <tbody>
                              { group.options && group.options.map((option,index)=>(
                                <tr key={index} className="*:py-2 *:px-10 *:bg-white">
                                    <td className="">
                                      <div className={`ml-3 px-4 py-2 font-inter font-semibold w-fit rounded-md border ${option.default?'bg-green-500 text-white shadow-md shadow-green-500/50 border-green-500':'bg-gray-100 text-gray-700 shadow-sm'}`}>
                                      {option.option}
                                      </div>
                                    </td>
                                    <td>{option.description}</td>
                                    <td>RM<span className="font-poppins"> {option.price}</span></td>
                                </tr>
                            ))}
                              </tbody>
                            </table>
                          </div>
                            
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </AuthLayout>
}

export default ProductView;