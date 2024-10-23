import React, { useState, createContext } from "react";
interface AuthContextType {
    token: string | null;
    sideBarExpand: boolean;
    toggleSideBar: (toggle: boolean) => void;
  }
export const AuthContext = createContext<AuthContextType | undefined>(undefined);  

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string | null>('abc1');
    
    const [sideBarExpand, setSideBarExpand] = useState<boolean>(false);
    const toggleSideBar: (toggle: boolean) => void = (toggle) => {
        setSideBarExpand(toggle);
    };

    return (
        <AuthContext.Provider value={{token,sideBarExpand,toggleSideBar}}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


