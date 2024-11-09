
import "../css/loader.css"
interface props{
    show:boolean
}
const Loader:React.FC<props> = ({show}) =>{
 
  
    return (
        <div className={`fixed uploader bg-black/50 z-100 flex items-center justify-center overflow-hidden ${show?'w-full h-full':'w-0 h-0 rounded-xl'}`}>
              <div className={`wrapper }`}>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                <span className="font-poppins text-white">Uploading</span>
            </div>
        </div>
    )
}

export default Loader;

/* HTML: <div classNameName="loader"></div> */
