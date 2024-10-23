import React from "react";
import SideBar from "../components/Sidebar";
import AuthProvider from "../context/AuthContext";
import Overlay from "../components/Overlay";
const AuthLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
   
    return (
        <AuthProvider>
            <div className="min-h-screen min-w-screen bg-gray-100 flex ">
            <SideBar />
            <Overlay />
            <div className={`flex-1 flex-col flex py-10 px-5 w-full overflow-hidden content`} >   
                {children}
                </div>
            </div>  
        </AuthProvider>
    );
};

export default AuthLayout;
