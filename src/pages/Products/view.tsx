import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthLayout from '../../layouts/AuthLayout';
import PreLoader from '../../components/PreLoader';

const ProductView:React.FC = ()=>{
    const { id } = useParams();
    const [fetching,setFetching] = useState<boolean>(true);
   

    const authContext = useContext(AuthContext);
    if(authContext == undefined) return ;
    const {token} = authContext;
    useEffect(()=>{

    },[])

    if(fetching){
        return <PreLoader/>
    } 
    return <AuthLayout>
        <div>{id}</div>
    </AuthLayout>
}

export default ProductView;