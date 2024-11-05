import {
  Control,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormReset,
} from "react-hook-form";
export interface Credentials {
  username_or_email: string | null;
  password: string | null;
}
export interface AuthContextType {
  token: string | null;
  sideBarExpand: boolean;
  toggleSideBar: (toggle: boolean) => void;
  login: (credentials: Credentials) => Promise<ApiResponse | ApiError>;
  register: UseFormRegister<Credentials>;
  control: Control<Credentials, unknown>;
  handleSubmit: UseFormHandleSubmit<Credentials, undefined>;
  errors: FieldErrors<Credentials>;
  isSubmitting: boolean;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  reset: UseFormReset<Credentials>;
}

export interface ApiResponse {
  data: {
    access_token: string;
    company: null | [];
    user: {
      id: number;
      username: string;
      email: string;
      type_id: number;
    };
  };
  message: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  success: boolean;
  data: object;
}
