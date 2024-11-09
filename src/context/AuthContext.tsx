import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Credentials,
  AuthContextType,
  ApiResponse,
  ApiError,
  UserDetails,
  CompanyDetails,
} from "../Types/type";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../config";
import secureLocalStorage from "react-secure-storage";
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [token, setToken] = useState<string | null>(
    (secureLocalStorage.getItem("token") as string) || null
  );
  const [userDetails, setUserDetails] = useState<UserDetails | null>(
    (secureLocalStorage.getItem("userDetails") as UserDetails) || null
  );
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(
    (secureLocalStorage.getItem("companyDetails") as CompanyDetails) || null
  );
  const [sideBarExpand, setSideBarExpand] = useState<boolean>(false);
  const toggleSideBar: (toggle: boolean) => void = (toggle) => {
    setSideBarExpand(toggle);
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Credentials>({
    defaultValues: {
      username_or_email: "",
      password: "",
    },
  });
  const login: (
    credentials: Credentials
  ) => Promise<ApiResponse | ApiError> = async (credentials) => {
    try {
      const { data } = await axios.post<ApiResponse>(
        `${BASE_URL}/login`,
        credentials
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        return {
          success: false,
          message: response?.data.detail || "error",
        } as ApiError;
      }
      return {
        success: false,
        message: "Internal server error",
      } as ApiError;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        sideBarExpand,
        toggleSideBar,
        login,
        register,
        control,
        handleSubmit,
        errors,
        isSubmitting,
        reset,
        userDetails,
        setCompanyDetails,
        companyDetails,
        setUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
