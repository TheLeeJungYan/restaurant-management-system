import { UserIcon, SecurityPasswordIcon } from "hugeicons-react";
import "../../css/login.css";
import { SubmitHandler } from "react-hook-form";
import React, { useContext, useState } from "react";
import AuthenticationInputContainer from "../../components/AuthenticationInputContainer";
import { AuthContext } from "../../context/AuthContext";
import { Credentials, ApiResponse, ApiError } from "../../types/type";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<boolean>(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState<string>("");
  const authContext = useContext(AuthContext);
  if (authContext === undefined) return;
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    login,
    setToken,
    reset,
    setCompanyDetails,
    setUserDetails,
  } = authContext;
  const isApiResponse = (
    response: ApiResponse | ApiError
  ): response is ApiResponse => {
    return (response as ApiResponse).data?.access_token !== undefined;
  };

  const onSubmit: SubmitHandler<Credentials> = async (data) => {
    resetLoginError();

    const response: ApiResponse | ApiError = await login(data);
    if (response === undefined) return;
    console.log(response);
    if (response.success) {
      console.log(response);
      reset();
      if (!isApiResponse(response)) return;
      secureLocalStorage.setItem("token", response.data.access_token);
      secureLocalStorage.setItem("companyDetails", response.data.company || "");
      secureLocalStorage.setItem("userDetails", response.data.user);
      setToken(response.data.access_token);
      setCompanyDetails(response.data.company);
      setUserDetails(response.data.user);
      navigate("/");
    } else {
      reset({ password: "" });
      setLoginError(true);
      setLoginErrorMsg(response.message);
    }
  };

  const resetLoginError: () => void = () => {
    setLoginError(false);
    setLoginErrorMsg("");
  };
  return (
    <div className="min-h-screen w-full bg-gray-100 flex gap-20 items-center justify-center">
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <form
        className="bg-white rounded-xl box-shadow-login font-poppins relative flex flex-col overflow-hidden h-fit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center">
          <div className="shadow-special h-1 w-1/2"></div>
        </div>
        <div className="flex flex-col py-8 px-10">
          <div className="flex items-center gap-4">
            {/* <div className="w-10 h-10 border rounded-lg shadow-lg flex items-center justify-center text-Nunito font-bold bg-gray-800 text-white text-2xl"><span className="j1 relative">J</span><span className="text-yellow-300 relative j2">J</span></div> */}
            <div className="flex flex-col">
              <div className="font-semibold font-inter text-lg">
                Sign in to continue
              </div>
              <span className="text-gray-400 text-xs">
                Please enter your details to login
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-8 gap-4">
            <AuthenticationInputContainer
              disabled={isSubmitting}
              label="Username"
              name="username_or_email"
              initialType="text"
              placeholder="John Doe"
              icon={<UserIcon size={16} />}
              register={register}
              errors={errors}
              loginError={loginError}
              validationSchema={{
                required: "Username is required",
              }}
              resetLoginError={resetLoginError}
            />
            <AuthenticationInputContainer
              disabled={isSubmitting}
              label="Password"
              name="password"
              initialType="password"
              placeholder="------------"
              icon={<SecurityPasswordIcon size={16} />}
              register={register}
              errors={errors}
              loginError={loginError}
              validationSchema={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minlength of password is 8",
                },
              }}
              resetLoginError={resetLoginError}
            />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {loginError && (
              <span className="text-primaryColor text-xs">
                * {loginErrorMsg}
              </span>
            )}
            <button
              className="flex items-center justify-center bg-gray-800 rounded-md px-2 py-3 text-white font-semibold text-md shadow-xl focus:ring focus:ring-gray-900 focus:border-gray-300 focus:ring-opacity-50 disabled:bg-gray-600"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="loader"></div>
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
