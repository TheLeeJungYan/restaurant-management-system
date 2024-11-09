import React, { useState } from "react";
import { ViewIcon, ViewOffSlashIcon } from "hugeicons-react";
import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form";
import { Credentials } from "../Types/type";
interface Props {
  label: string;
  initialType: string;
  placeholder: string;
  icon?: React.ReactNode;
  name: "username_or_email" | "password";
  register: UseFormRegister<Credentials>;
  errors: FieldErrors<Credentials>;
  validationSchema: object;
  disabled: boolean;
  loginError: boolean;
  resetLoginError: () => void;
}
const AuthenticationInputContainer: React.FC<Props> = ({
  label,
  initialType,
  placeholder,
  icon,
  name,
  register,
  errors,
  validationSchema,
  disabled,
  loginError,
  resetLoginError,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [type, setType] = useState<string>(initialType);
  const changeType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (type == "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div className="flex flex-col">
      <span className="text-xs font-semibold font-inter ml-1">{label}</span>
      <label
        className={`flex overflow-hidden w-96 rounded-lg shadow-sm  mt-1 border border-gray-300 cursor-pointer select-none ${
          focus && !errors[name] && "ring ring-gray-200 ring-opacity-50"
        } ${
          errors[name] || loginError
            ? "ring ring-primaryColor ring-opacity-30 border-primaryColor/80"
            : ""
        }  ${disabled ? "bg-slate-50 cursor-not-allowed" : ""}`}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <div className="flex items-center justify-center border-r text-gray-500 px-3 border-gray-300">
          {icon}
        </div>
        <input
          disabled={disabled}
          aria-disabled={disabled}
          type={type}
          className="flex-1 outline-0 py-3 px-2 disabled:bg-slate-50"
          placeholder={placeholder}
          {...register(name, validationSchema)}
          onInput={() => {
            if (loginError) {
              resetLoginError();
            }
          }}
        />

        {initialType == "password" && (
          <button
            type="button"
            disabled={disabled}
            aria-disabled={disabled}
            className={`px-3 text-gray-500 ${
              !disabled && "hover:text-gray-800 "
            }`}
            onClick={changeType}
          >
            {type == "password" ? (
              <ViewIcon size={20} />
            ) : (
              <ViewOffSlashIcon size={20} />
            )}
          </button>
        )}
      </label>
      {errors[name] && (
        <span className="text-xs text-primaryColor mt-1">
          * {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default AuthenticationInputContainer;
