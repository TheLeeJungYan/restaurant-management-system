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
          
            <div className="flex-1 mt-5 flex gap-5">
              <div className="flex flex-col basis-1/3 gap-5">
                <img src={product?.image_url} alt="" className="rounded-lg shadow-md" />
                <div className="border-t flex flex-col py-2 border-gray-200">
                  <div className="italic font-inter text-md">Description</div>
                  <div className="mt-4 font-poppins text-gray-500">{product?.description}</div>
                </div>
              </div>
              <div className="flex-1 rounded-md  px-10">
                <span className="font-inters font-semibold text-7xl tracking-wider">
                  {product?.name}
                </span>
                <div className="bg-white rounded-md w-fit mt-5 px-4 py-2 font-poppins border">Main Dish</div>
                <div className="font-sans mt-8 text-3xl font-semibold text-gray-800">RM {product?.price}<span className="text-gray-500">.00</span></div>
                {/* <div className="mt-5 rounded-md border-t">
                  <div className="font-inters font-bold mt-4">Product Options :</div>
                  <div className="flex flex-col mt-5 gap-4">
                  {
                      optionGroups && 
                      optionGroups.map((group,index)=>(
                        <div key={index} className="flex flex-col">
                          <div className="flex items-center gap-2  *:py-2 border border-gray-200 rounded-lg overflow-hidden bg-white text-gray-600">
                            <div className="flex items-center justify-center font-bold border-r border-gray-200 px-4">{index+1}</div>
                            <div className="font-inter font-bold pl-2">{group.name}</div>
                            <button className={`ml-auto px-2 ${expandedGroups[index] ? 'rotate-180' : ''}`} onClick={() => setExpandedGroups(prev => ({
                                ...prev, 
                                [index]: !prev[index]
                            }))} ><ArrowDown01Icon size={18}/></button>
                          </div>
                          <div className={`flex-col ${expandedGroups[index] ? 'flex bg-white mt-2 rounded-xl overflow-hidden border' : 'hidden'}`}>
                            <table className="">
                              <thead className="*:py-2 *:pb-2 *:px-10 *:text-left *:border-b *:bg-slate-50">
                                <th className="">Options</th>
                                <th className="">Description</th>
                                <th className="">Price</th>
                              </thead>
                              <tbody>
                              { group.options && group.options.map((option,index)=>(
                                <tr key={index} className="*:py-2 *:px-10 *:bg-white">
                                    <td className="">
                                      <div className={`ml-3 px-3 py-1 font-inter font-semibold w-fit rounded-xl border ${option.default?'bg-green-500 text-white shadow-md shadow-green-500/20 border-green-500':'bg-gray-100 text-gray-700 shadow-sm'}`}>
                                      {option.option}
                                      </div>
                                    </td>
                                    <td className="font-poppins">{option.description}</td>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
        
    </AuthLayout>
}

export default ProductView;