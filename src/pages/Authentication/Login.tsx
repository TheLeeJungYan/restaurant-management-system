import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from "../../Lottie/LoginAnimation.json"
import "../../css/login.css"
import { useRef } from 'react';
const Login:React.FC = () =>{
    const animationRef = useRef<LottieRefCurrentProps>(null)
    return <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center ">
        <div
  className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
></div>
        <div className="bg-white rounded-xl flex box-shadow-login font-poppins relative flex flex-col overflow-hidden">
            <div className="flex flex-col py-8 px-10">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border rounded-lg shadow-lg flex items-center justify-center text-Nunito font-bold bg-gray-800 text-white text-2xl"><span className="j1 relative">J</span><span className="text-yellow-300 relative j2">J</span></div>
                <div className="flex flex-col">
                <div className="font-semibold font-inter text-lg">Sign in to continue</div>
                <span className="text-gray-400 text-xs">Please enter your details to login</span>
                </div>
                </div>
                <div className="flex flex-col mt-8 gap-4">
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold font-inter ml-1">Username</span>
                        <input type="text" name="" id="" className="w-96 rounded-xl shadow-sm px-4 py-2 mt-1 border border-gray-300 outline-0" placeholder="John Doe"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold font-inter ml-1">Password</span>
                        <input type="password" name="" id="" className="w-96 rounded-xl shadow-sm px-4 py-2 mt-1 border border-gray-300 outline-0" placeholder="************"/>
                        <div className="text-xs mt-2 ml-1 font-inter"><span className="text-gray-400">Forget password ?</span>&nbsp;<a href="#" className="text-black">Reset it</a></div>
                    </div>
                </div>
                <button className="mt-8 bg-gray-800 rounded-xl px-2 py-3 text-white font-semibold text-md">Login</button>
            </div>
        </div>
    </div>
}

export default Login