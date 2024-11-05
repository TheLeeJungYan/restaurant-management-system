import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute: React.FC = () => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) return "no authContext";
  const { token } = authContext;
  if (token == null) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
