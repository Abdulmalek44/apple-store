import { Loading, SpinnerLoader, Toast } from "@/components/feedback";
import Input from "@/components/form/input";
import { Button } from "@/components/ui/button";
import usePersonalInfo from "@/Hooks/componentsHooks/usePersonalInfo";

const PersonalInformation = () => {
  const {
    register,
    errors,
    loadingUpdate,
    loading,
    error,
    user,
    handleSubmit,
    onSubmit,
    searchParams,
    isDisabled,
  } = usePersonalInfo();
  return (
    <div className="col-span-2 ">
      <Loading error={error} status={loading} type="profileDetails">
        <h1 className="font-bold text-xl">Personal Information</h1>
        <div className="flexCenter flex-col gap-y-4 mt-4">
          <Input
            error={errors.email?.message}
            label="Email"
            name="email"
            type="email"
            register={register}
            placeholder={user?.email}
          />
          <Input
            error={errors.firseName?.message}
            label="First name"
            name="firseName"
            type="text"
            register={register}
            placeholder={user?.firstname}
          />
          <Input
            error={errors.lastName?.message}
            label="Last name"
            name="lastName"
            type="text"
            register={register}
            placeholder={user?.lastname}
          />
        </div>
        {user && (
          <div>
            <h1 className="mt-5">
              Change your account details below,Or{" "}
              <span className="underline cursor-pointer">click here</span> to
              change your password
            </h1>
            <Button
              className=" my-5"
              disabled={loadingUpdate === "pending" || isDisabled}
              onClick={handleSubmit(onSubmit)}
            >
              {loadingUpdate === "pending" ? (
                <div className="flex items-center justify-around gap-x-6 ">
                  <SpinnerLoader />
                  Loading...
                </div>
              ) : (
                "Update Account"
              )}
            </Button>
            {error && (
              <div>
                <Toast message={error as string} icon="error" />
              </div>
            )}
            {searchParams.get("message") ===
              "user_information_update_successful" && (
              <Toast
                message="User information update it successfully."
                icon="check"
                outlineColor="outline-green-500"
              />
            )}
          </div>
        )}
      </Loading>
    </div>
  );
};

export default PersonalInformation;
