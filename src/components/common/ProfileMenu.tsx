import ProfileImage from "@/assets/svg/profile.svg?react";
import Purchases from "@/assets/svg/purchases.svg?react";
import Order from "@/assets/svg/orders.svg?react";
import LogOut from "@/assets/svg/logout.svg?react";
import User from "@/assets/svg/user.svg?react";
import { ProfileMenuItem } from "../feedback";
import { useAppSelector } from "@/Store/hooks";

const ProfileMenu = () => {
  const { user } = useAppSelector((state) => state.Auth);
  return (
    <div className="col-span-1">
      <div className="flex items-center  gap-x-3">
        <ProfileImage className="w-12 h-12" />
        <div>
          <h1 className="font-bold">{user?.firstname}</h1>
          <h3 className="text-xs text-main-text-hover">{user?.email}</h3>
        </div>
      </div>
      <div className="flex flex-col max-lg:flex-row my-5 overflow-x-auto">
        <ProfileMenuItem
          Icon={User}
          name="Personal Information"
          to="/profile"
        />
        <ProfileMenuItem Icon={Purchases} name="My Purchases" to="purchases" />
        <ProfileMenuItem Icon={Order} name="My Orders" to="orders" />
        <ProfileMenuItem Icon={LogOut} name="Logout" />
      </div>
    </div>
  );
};

export default ProfileMenu;
