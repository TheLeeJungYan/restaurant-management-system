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
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | null>>;
  setCompanyDetails: React.Dispatch<React.SetStateAction<CompanyDetails>>;
  userDetails: UserDetails | null;
  companyDetails: CompanyDetails | null;
}

export interface ApiResponse {
  data: {
    access_token: string;
    company: CompanyDetails;
    user: UserDetails;
  };
  message: string;
  success: boolean;
}

export interface ApiError {
  success: false;
  message: string;
}

export interface UserDetails {
  id: number;
  username: string;
  email: string;
  type_id: number;
}

export type CompanyDetails = null | [];

export interface Options {
  option: string;
  desc: string;
  price: string;
}
export interface OptionsGrp {
  name: string;
  collapse: boolean;
  default: string;
  options: Options[];
}
export interface Inputs {
  name: string;
  description: string;
  category: number | string;
  price: number;
  image: File | undefined;
  optionGroups: [] | OptionsGrp[];
}

export interface Products{
  id:number;
  name:string;
  price:number;
  description:string;
  category:string;
  created_at:string;
  image_url:string;
}

export interface hugeIconProps{
  size: number;
  color?: string;
  id?:string

}