import { useEffect, useRef, useState } from "react";
import SuccessIcon from "../assets/icons/Success";
import gsap from "gsap";
import "../css/cursor.css"
gsap.registerPlugin();
const CursorAnimation:React.FC = () =>{
    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursorShow,setCursorShow] = useState<boolean>(false);
    const moveCursor:(e:MouseEvent) => void = (e) =>{
        if(!cursorRef.current) return;
        gsap.to(cursorRef.current,{
            x:e.clientX,
            y:e.clientY,
        })
    }
    useEffect(()=>{
        
        setTimeout(()=>{
            setCursorShow(true);
            gsap.set(cursorRef.current,{
                xPercent: 100,
                yPercent:-100,
            })
        },3000)
    },[])

    window.addEventListener("mousemove",moveCursor)
    return (<div id="cursor" ref={cursorRef} className={`${cursorShow?'w-6 h-6':'w-0 h-0'} ring ring-emerald-400 ring-opacity-50 fixed top-0 left-0  bg-emerald-500  z-100 rounded-full text-white flex items-center justify-center`}>
       <SuccessIcon size={cursorShow?16:0} color={'#fff'} id="successIcon"/>
       <div className="absolute bg-emerald-400 ring ring-opacity-30 ring-emerald-300 left-8 text-sm px-2 rounded-full font-poppins flex items-center top-2"> success</div>
    </div>)
}

export default CursorAnimation;