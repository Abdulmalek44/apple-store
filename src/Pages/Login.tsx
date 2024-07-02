import { Button } from "@/components/ui/button";
import Input from "@/components/form/input";
import Lottie from "lottie-react";
import hand from "@/assets/svg/hand.png";
import loginLottie from "@/assets/lottieFiles/apple-auth.json";
import { SpinnerLoader, Toast } from "@/components/feedback";
import { NavLink } from "react-router-dom";
import useLogin from "@/Hooks/componentsHooks/useLogin";

const Login = () => {
  const {
    loading,
    error,
    searchParams,
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useLogin();

  return (
    <div className="grid lg:grid-cols-2 w-full h-[85vh] ">
      {/* Left Side  */}
      <div className="flexCenter max-lg:p-10">
        <Lottie
          animationData={loginLottie}
          className="max-lg:w-10/12 max-lg:my-6 object-contain"
        />
      </div>

      {/* Right Side  */}
      <div className="flexCenter ">
        <div className="lg:w-1/2 w-11/12 flex flex-col gap-y-5 lg:p-6 mb-10 ">
          {searchParams.get("message") === "account_created_successful" ? (
            <Toast
              message=" Your account successfully created, please login."
              icon="check"
              outlineColor="outline-green-500"
            />
          ) : searchParams.get("message") === "login_required" ? (
            <Toast
              message="You need to login to view this content."
              icon="error"
              outlineColor="outline-red-500"
            />
          ) : (
            ""
          )}
          <div className="place-self-start">
            <div className="flexStart gap-x-3">
              <h2 className="text-2xl font-bold">Welcome</h2>
              <img src={hand} alt="hand" className="w-6 h-6" />
            </div>
            <span className="text-main-text-dark">Please login here</span>
          </div>
          <form
            className="flexCenter flex-col gap-y-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              error={errors.email?.message}
              label="Email"
              name="email"
              type="email"
              register={register}
            />
            <Input
              error={errors.password?.message}
              label="Password"
              name="password"
              type="password"
              register={register}
            />
            <Button className="w-full mt-2" disabled={loading === "pending"}>
              {loading === "pending" ? (
                <div className="flex items-center justify-around gap-x-6 ">
                  <SpinnerLoader />
                  Loading...
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </form>
          <div className="flexBetween">
            <NavLink to="/register" className="cursor-pointer text-sm">
              Create an account?
            </NavLink>
            <NavLink to="" className="cursor-pointer text-sm">
              Forgot password?
            </NavLink>
          </div>
          {error && (
            <div className="mb-5">
              <Toast message={error as string} icon="error" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
