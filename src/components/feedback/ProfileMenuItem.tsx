import { authLogOut } from "@/Store/Auth/authSlice";
import { useAppDispatch } from "@/Store/hooks";

import { useNavigate } from "react-router-dom";

type TProfileMenuItem = {
  name: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  to?: string;
};

const ProfileMenuItem = ({ Icon, name, to }: TProfileMenuItem) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutHandle = () => {
    dispatch(authLogOut());
    navigate("/");
  };

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      logoutHandle();
    }
  };
  return (
    <>
      <div
        className="flex flexStart gap-x-2 cursor-pointer lg:py-4 py-2 my-1 px-5 lg:w-9/12 hover:bg-main-hover-bg
         dark:hover:bg-main-hover-bg-dark duration-300 rounded-full "
        onClick={handleClick}
      >
        <Icon className="w-6 h-6  dark:text-main-text" />
        <h1 className="whitespace-nowrap">{name}</h1>
      </div>
    </>
  );
};

export default ProfileMenuItem;
