
import {
    Cancel01Icon
} from "hugeicons-react"
import Success from "../assets/hugeIcons/Success";
const SuccessMsg:React.FC<{msg:string|null}> = ({msg}) =>{
    return (
        <div className={`flex bg-white rounded-xl mb-2 font-poppins  bg-green-200/50 items-center transition-all duration-1000 overflow-hidden ${msg?' border h-20 opacity-1':'h-0 opacity-0'}`}>
            <div className="bg-green-600 rounded-full p-2 shadow-lg shadow-green-600/60 items-center justify-center ml-4">
                <Success size={16} color={'#fff'}/>
            </div>
            <div className="flex-1 flex-col ml-5">
                <div className="font-inter font-bold text-green-900 text-lg">Success !</div>
                <div className="font-poppins text-xs text-green-800">{msg}</div>
            </div>
            <button type="button" className="ml-auto text-gray-500 hover:text-gray-400 mr-4">
                <Cancel01Icon size={16} className=""/>
            </button>
        </div>
    )
}
export default SuccessMsg;