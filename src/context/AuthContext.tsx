import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Credentials,
  AuthContextType,
  ApiResponse,
  ApiError,
} from "../types/type";
import { useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../config";
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
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
  const login = async (
    credentials: Credentials
  ): Promise<ApiResponse | ApiError> => {
    try {
      const { data } = await axios.post<ApiResponse>(
        `${BASE_URL}/login`,
        credentials
      );
      return data;
    } catch (error) {
      console.error(error);
      return {
        message: "error",
        success: false,
        data: {},
      };
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
