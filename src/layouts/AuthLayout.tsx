import React, { useState } from "react";
import SideBar from "../components/Sidebar";

import Overlay from "../components/Overlay";
import "../css/authLayout.css";
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`min-h-screen min-w-screen flex bg-gray-100 `}>
      <SideBar />
      <Overlay />
      <div className={`flex-1 flex-col flex  content`}>{children}</div>
    </div>
  );
};

export default AuthLayout;
