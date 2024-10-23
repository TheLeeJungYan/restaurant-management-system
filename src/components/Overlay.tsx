import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Overlay: React.FC = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        return 'adad'; // If AuthContext is not provided, return nothing or show a fallback
    }   

    const { sideBarExpand } = authContext;
    return (  <div
        className={`fixed top-0 left-0 bg-black/40 w-full h-full z-40 ${
            sideBarExpand ? "block" : "hidden"
        }`}
        id="overlay"
        ></div>);
}

export default Overlay;