import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthLayout from '../../layouts/AuthLayout';
import PreLoader from '../../components/PreLoader';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { Products,ViewOptionGroups } from "../../Types/type"
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
        <div>{id}</div>
    </AuthLayout>
}

export default ProductView;