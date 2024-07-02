import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Input from "@/components/form/input";
import Lottie from "lottie-react";
import hand from "@/assets/svg/hand.png";
import registerLottie from "@/assets/lottieFiles/register.json";
import { SpinnerLoader, Toast } from "@/components/feedback";
import useRegister from "@/Hooks/componentsHooks/useRegister";

const Register = () => {
  const { loading, error, register, handleSubmit, errors, onSubmit } =
    useRegister();
  return (
    <div className="grid lg:grid-cols-2 w-full h-[85vh]">
      {/* Left Side  */}
      <div className="flexCenter ">
        <Lottie
          animationData={registerLottie}
          className=" w-8/12 max-lg:my-10 object-contain"
        />
      </div>

      {/* Right Side  */}
      <div className="flexCenter">
        <div className="lg:w-1/2 w-11/12 flex flex-col gap-y-3 lg:p-6 rounded-md ">
          <div className="place-self-start ">
            <div className="flexStart gap-x-3">
              <h2 className="text-2xl font-bold">Welcome</h2>
              <img src={hand} alt="hand" className="w-6 h-6" />
            </div>
            <span className="text-main-text-dark">Please enter details</span>
          </div>
          <form
            className="flexCenter flex-col gap-y-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex w-full gap-x-2">
              <Input
                error={errors.firseName?.message}
                label="First name"
                name="firseName"
                type="text"
                register={register}
              />
              <Input
                error={errors.lastName?.message}
                label="Last name"
                name="lastName"
                type="text"
                register={register}
              />
            </div>
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
            <Input
              error={errors.confirmPassword?.message}
              label="Confirm password"
              name="confirmPassword"
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
                "Register"
              )}
            </Button>
          </form>
          <NavLink to="/login" className="cursor-pointer text-sm max-lg:mb-5">
            Already have an account? Login
          </NavLink>
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

export default Register;
