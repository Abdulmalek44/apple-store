import { ProfileMenu } from "@/components/common";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col my-3">
      <div className="max-w-6xl w-full mx-auto flex flex-col max-lg: px-3">
        <h1 className="font-bold lg:text-3xl text-2xl my-6 ">My Profile</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-20 px-2 ">
          <ProfileMenu />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
