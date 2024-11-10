
import "../css/loader.css"
import {
    SentIcon
}from "hugeicons-react"
interface props{
    show:boolean
}
const Loader:React.FC<props> = ({show}) =>{
 
  
    return (
        <div className={`fixed uploader bg-black/80 z-100 flex items-center justify-center overflow-hidden ${show?'w-full h-full':'w-0 h-0 '}`}>
            <div className="w-36 h-36 bg-black rounded-full flex items-center justify-center loadingCircle relative overflow-hidden">
                
            </div>
        </div>
    )
}

export default Loader;

/* HTML: <div classNameName="loader"></div> */
