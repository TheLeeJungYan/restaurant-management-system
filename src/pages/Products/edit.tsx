import { useParams } from 'react-router-dom';
import PreLoader from '../../components/PreLoader';
import AuthLayout from '../../layouts/AuthLayout';
import ManageProductContextProvider from '../../context/ManageProductContext';
import ManageProductContent from '../../components/ManageProductContent';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { AuthContext } from "../../context/AuthContext";
import { Products, ViewOptionGroups } from '../../Types/type';
const ProductEdit:React.FC = () =>{
    const [fetching,setFetching] = useState<boolean>(true);
    const [product,setProduct] = useState<null | Products>(null);
    const [optionGroups,setOptionGroups] = useState<null | ViewOptionGroups[]>(null);
    const [image,setImage] = useState<File | undefined>(undefined);
    const { id } = useParams();
    const authContext = useContext(AuthContext);
    if(authContext == undefined) return ;
    const { token } = authContext;
    const fetchProduct = async()=>{
        try{
            const response =  await axios.get(`${BASE_URL}/product/${id}`,{
                headers:{
                  Authorization: `Bearer ${token}`
                }
              });
            
              setProduct(response.data.data.product);
              setOptionGroups(response.data.data.options);
              fetchImage(response.data.data.product.image_url);
              console.log(response.data)
            
        }catch(e){
            console.error(e);
        }
    }
    const fetchImage:(image_url:string) =>void = async(image_url)=>{
        try{
            const response = await axios.get(image_url, { responseType: 'blob' });
            const blob = response.data;
            const fileName = image_url.split('/').pop() || 'downloaded-image.jpg'; 
            
            const file = new File([blob], fileName, { type: blob.type });
            setImage(file);
            setFetching(false);
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        fetchProduct();
    },[])

    
    return (
        <AuthLayout>
        {fetching ? <PreLoader/> : <ManageProductContextProvider edit={true} product={product} optionGrps={optionGroups} image={image}>
            <ManageProductContent></ManageProductContent>
        </ManageProductContextProvider>}
        
    </AuthLayout>
    )
}

export default ProductEdit;
