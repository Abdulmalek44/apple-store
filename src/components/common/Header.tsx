import Logo from "@/assets/svg/apple-icon.svg?react";

import DarkMoodToggle from "./DarkMoodToggle";
import { HamburgerMenu, DropDownMenu } from "@/components/common";
import { NavLink } from "react-router-dom";
import { NavLinks } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import { useEffect } from "react";
import actCreateOrGetCart from "@/Store/Cart/act/actCreateOrGetCart";
import { CartHeader } from "../ecommerce";

const Header = () => {
  const { accessToken } = useAppSelector((state) => state.Auth);
  const { total_items } = useAppSelector((state) => state.Cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actCreateOrGetCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const navLinks = NavLinks.filter(
    (link) =>
      !accessToken || (link.name !== "Login" && link.name !== "Register")
  ).map((link) => (
    <li key={link.name} className="list-none">
      <NavLink
        to={link.href}
        className={({ isActive }) =>
          `text-xl dark:text-main-text-dark hover:text-main-text-hover dark:hover:text-white duration-300 font-semibold 
                ${isActive ? "text-main-text-dark dark:text-white" : ""}`
        }
      >
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <header className="w-full p-4 flexBetween  lg:flexEvenly md:px-10 border-b-2 dark:border-main-border-dark">
      <Logo className="icon text-black dark:text-gray-300" />
      <div className="flexEnd gap-x-10 max-lg:hidden">{navLinks}</div>
      <div className="flexCenter gap-x-3 lg:gap-8 ">
        {accessToken && <DropDownMenu />}
        {accessToken && <CartHeader totalItems={total_items} />}
        <DarkMoodToggle />
        <HamburgerMenu accessToken={accessToken} />
      </div>
    </header>
  );
};

export default Header;
