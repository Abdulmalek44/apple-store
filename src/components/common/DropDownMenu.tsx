import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import { User, LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/Store/hooks";
import { authLogOut } from "@/Store/Auth/authSlice";
import Profile from "@/assets/svg/profile.svg?react";
const DropDownMenu = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none flex items-center justify-center">
          <Avatar className="fle items-center justify-center">
            <Profile className="w-9 h-9 flex dark:text-gray-300" />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-5 bg-main-bg text-black w-40 rounded-sm cursor-pointer border border-main-border dark:border-main-border-dark dark:bg-main-dark-bg dark:text-main-text ">
          <DropdownMenuLabel className="p-4 border-b dark:border-main-border-dark">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="" />
          <DropdownMenuItem
            className="flexStart space-x-2 p-2 hover:bg-main-hover-bg dark:hover:bg-main-hover-bg-dark outline-none border-b d dark:border-main-border-dark"
            onClick={() => navigate("/profile")}
          >
            <User className=" h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flexStart space-x-2 p-2 hover:bg-main-hover-bg dark:hover:bg-main-hover-bg-dark outline-none border-b d dark:border-main-border-dark"
            onClick={() => navigate("#")}
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flexStart space-x-2 p-2 hover:bg-main-hover-bg dark:hover:bg-main-hover-bg-dark outline-none "
            onClick={() => {
              dispatch(authLogOut());
              navigate("/");
            }}
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownMenu;
