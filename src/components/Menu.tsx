import DishIcon from '../assets/icons/dish.svg'
import React, {useRef,useState} from 'react';
import '../css/menu.css'
import {
    ArrowLeftDoubleIcon,
    ArrowRightDoubleIcon
  } from "hugeicons-react";
interface Product {
    id:number,
    name:string,
    img:string,
    price:number,
    type:string
}
interface props {
    products:Product[]
}


const Menu:React.FC<props> = ({products}) =>{
    const [leftIconShow,setLeftIconShow] = useState<boolean>(false);
    const [rightIconShow,setRightIconShow] = useState<boolean>(true);
    const tabBox = useRef<HTMLDivElement>(null); 
    const uniqueTypes:string[] = [...new Set(products.map(product => product.type))];
    const getImageUrl:(name:string) => string = (name)=>{
        return new URL(`../assets/icons/${name}.svg`,import.meta.url).href;
    }
    const handleIcons:() => void = () =>{
        const scrollValue: number = tabBox.current!.scrollLeft;
        const maxScrollWidth:number = tabBox.current!.scrollWidth -  tabBox.current!.clientWidth;
    
        
        if (scrollValue > 0) {
            setLeftIconShow(true);
        } else {
            setLeftIconShow(false);
        }

        if(scrollValue>maxScrollWidth){
            setRightIconShow(false);
        }else{
            setRightIconShow(true)
        }
    }
    const slideRight:() =>void = () =>{
        tabBox.current!.scrollLeft += 350;
        console.log('right')
        
    }

    const slideLeft:() =>void = ()=>{
        tabBox.current!.scrollLeft -= 350;
      
    }
    const tabScroll:()=>void =() =>{
        handleIcons();
    }
    return (
        <div className="flex-1 flex flex-col py-5  w-full ">
            <span className="font-nunito font-black text-gray-700 uppercase text-3xl px-3">
                menu
            </span>
          
            <div id="cat" className="flex mt-2 w-full items-center  relative">
                <div className={`icon ${leftIconShow?'flex':'hidden'}`}>
                    <div className="iconWrapper bg-white rounded-full px-2 py-2 text-gray-700 border border-gray-400 cursor-pointer ml-2" onClick={slideLeft}>
                        <ArrowLeftDoubleIcon size={20}/>
                    </div>
                </div>
                <div ref={tabBox} id="tabBox" className="flex items-center overflow-x-hidden gap-2 px-3 py-3" onScroll={tabScroll}>
                <div className="capitalize font-poppins font-semibold w-fit shrink-0
                                 text-sm rounded-full  px-4 py-2 bg-primaryColor text-white cursor-pointer shadow-md shadow-primaryColor flex gap-2"><img src={DishIcon} className="w-4 h-4 object-contain flex-1 shrink-0"></img><span className="flex-1 shrink-0">All</span></div>
                {
                    uniqueTypes.map((type,index )=>{
                        return <div key={index} className={`
                                capitalize font-poppins font-semibold shrink-0
                                 text-sm rounded-full px-4 py-2 
                                cursor-pointer  bg-gray-200 text-gray-700 hover:bg-gray-300  transition-all flex gap-2` }><img src={getImageUrl(type)} className="w-4 h-4 object-contain"></img><span>{type}</span></div>
                    })
                }
                </div>
                <div className={`icon ${rightIconShow?'flex':'hidden'}`}>
                    <div className="iconWrapper bg-white rounded-full px-2 py-2 text-gray-700 border border-gray-400 cursor-pointer mr-2" onClick={slideRight}>
                        <ArrowRightDoubleIcon size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;