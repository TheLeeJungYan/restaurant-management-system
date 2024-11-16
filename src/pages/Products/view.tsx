import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthLayout from '../../layouts/AuthLayout';
import PreLoader from '../../components/PreLoader';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { Products,ViewOptionGroups } from "../../Types/type"
import MaintenanceHeader from '../../components/MaintenanceHeader';
import { Settings03Icon , CodesandboxIcon , ArrowRight01Icon, RecordIcon} from "hugeicons-react"
import InfoIcon from "../../assets/hugeIcons/Info";
import CloseIcon from "../../assets/hugeIcons/Close";
import "../../css/productView.css"
import SuccessIcon from '../../assets/hugeIcons/Success';
const ProductView:React.FC = ()=>{
    const { id } = useParams();
    const [fetching,setFetching] = useState<boolean>(true);
    const [product,setProduct] = useState<null | Products>(null);
    const [optionGroups,setOptionGroups] = useState<null | ViewOptionGroups[]>(null);
    const [optionGroupsDt,setoptionGroupsDt] = useState<null|ViewOptionGroups>(null);
    const [modalOpen,setModalOpen] = useState<boolean>(false);
    const openModal:(index:number) => void = (index) =>{
      if(!optionGroups) return;
      const selectedOptionGroups = optionGroups[index];
      setoptionGroupsDt(selectedOptionGroups)
      setModalOpen(true);
    }
    const closeModal:() => void = () =>{
      setModalOpen(false);
      setoptionGroupsDt(null);
    }
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
      {modalOpen && <div className="fixed top-0 left-0 w-full h-full z-100 bg-black/50 flex items-center justify-center">
        <div className="bg-white flex flex-col rounded-lg font-poppins overflow-hidden min-w-112 relative shadow-md px-5 py-5">
          <div className="flex justify-between item-start ">
            <div className="flex flex-col">
            <div className="font-inters font-semibold text-lg">Options groups details</div>
            <div className="text-gray-400 text-xs">comprehensive information of the options group</div>
            </div>
           
            <button onClick={closeModal} className="h-fit"><CloseIcon size={17} color={"rgb(209 213 219)"}/></button>
          </div>
          <div className="flex flex-col mt-3">
          <div className="w-fit mt-4 font rounded-lg ml-2 uppercase flex items-center gap-2 text-gray-400"><div className="bg-gray-200 w-2 h-2 rounded-full"></div>{optionGroupsDt?.name}</div>
            <div className="flex flex-col gap-2 mt-2">
              {optionGroupsDt && optionGroupsDt.options.map((o,index)=>{
                return(
                  <div key={index} className={`${o.default?'bg-green-500/10 border-green-200 text-green-500':'bg-gray-100  border-gray-100'} relative border rounded-md px-2 py-2 flex gap-2 items-center text-gray-700`}>
                    {o.default && <div className="absolute text-xs text-white rounded-full bg-green-500 px-2" style={{top:'-8px',right:'0px'}}>default</div>}
                    <div className={`${o.default?'bg-green-500/20 shadow-green-500/10':' bg-white'} min-w-16 flex items-center justify-center py-2 rounded-lg px-2 font-semibold font-inter shadow-sm w-fit`}>
                      {o.option}
                    </div>
                   
                    <div className="flex-1 px-2 break-all">{o.description }</div>
                    <div className="px-2 text-sm">RM {o.price}</div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* <div className="flex flex-col mt-2 rounded-md overflow-hidden border border-gray-300">
          <table className="border-separate">
          <thead>
            <tr className=" text-sm font-inter text-left *:px-4 *:border-b *:py-2 *:border-b  *:bg-gray-100 *:border-gray-300 font-bold">
              <th className=""><div>Option</div></th>
              <th><div>Description</div></th>
              <th><div>Price</div></th>
              <th className=""><div>Default</div></th>
            </tr>
          </thead>
          <tbody className="">
           {optionGroupsDt && optionGroupsDt.options.map((o,index)=>{
            return (
              
              <tr key={index} className={`*:px-4 *:py-2 `}>
                <td className="text-center"><div className="bg-gray-800 shadow-blue-100 text-white w-fit rounded-full px-4 py-2 shadow-sm">{o.option}</div></td>
                <td>{o.description}</td>
                <td className=" ">RM {o.price}</td>
                <td className="">
                  {o.default && <div className="bg-green-500 w-fit p-1 rounded-full"><SuccessIcon size={16} color={'#fff'}/></div>}
                </td>
              </tr>
            )
            })}</tbody>
            </table>
          </div> */}
        </div>
      </div>}
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
                <div className="bg-gray-200 text-gray-800 rounded-md w-fit mt-5 px-4 py-2 font-poppins border font-semibold">Main Dish</div>
                <div className="font-sans mt-8 text-3xl font-semibold text-gray-800">RM {product?.price ? Number(product.price).toFixed(2).split('.')[0]  : ""}<span className="text-gray-500">.{product?.price ? Number(product.price).toFixed(2).split('.')[1]  : ""}</span></div>
                <div className="flex flex-col border-t mt-5 py-6 gap-5">
                  {optionGroups && optionGroups.map((group,gIndex)=>{
                      return (
                        <div key={gIndex} className="flex flex-col">
                          <div className="font-poppins text-md font-semibold flex gap-2 items-start"><div className="text-lg text-gray-400 ">{group.name}</div>
                          <button className="relative text-blue-800" style={{top:'-3px'}} onClick={()=>{openModal(gIndex)}}><InfoIcon size={18} color={'rgb(22 163 74)'}/></button></div>
                          <div className="flex mt-2 gap-3">
                          {group.options && group.options.map((option,oIndex)=>{
                            return (
                              <div className={`px-6 py-1.5 rounded-lg font-inters font-semibold border ${option.default?"bg-green-500/10 border-green-500 text-green-500":"bg-white text-gray-600"}`} key={oIndex}>
                                {option.option}
                              </div>
                            )
                          })}
                          </div>
                        </div>)
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </AuthLayout>
}

export default ProductView;