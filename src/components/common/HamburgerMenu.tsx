import { useState } from "react";
import Close from "@/assets/svg/close-circle.svg?react";
import Hamburger from "@/assets/svg/hamburger-menu.svg?react";
import { NavLinks } from "@/Constant";
import { NavLink } from "react-router-dom";

const HamburgerMenu = ({
  accessToken,
}: {
  accessToken: string | undefined;
}) => {
  const [isSideMenuOpen, setMenu] = useState(false);

  const handelMmenu = () => {
    setMenu(!isSideMenuOpen);
  };

  const navLinks = NavLinks.filter(
    (link) =>
      !accessToken || (link.name !== "Login" && link.name !== "Register")
  ).map((link) => (
    <li key={link.name} className="list-none" onClick={handelMmenu}>
      <NavLink
        to={link.href}
        className={({ isActive }) =>
          ` text-4xl font-semibold ${
            isActive ? "text-main-text-dark dark:text-main-text" : ""
          }`
        }
      >
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <Hamburger
        className="icon lg:hidden flex text-black dark:text-main-text"
        onClick={handelMmenu}
      />
      {isSideMenuOpen && (
        <div className="w-full h-screen flexCenter bg-main-bg dark:bg-main-dark-bg text-black dark:text-main-text-dark fixed top-0 left-0 z-50">
          <Close
            className="icon absolute top-5 right-5 text-black dark:text-main-text"
            onClick={handelMmenu}
          />
          <div className="flexCenter flex-col gap-y-10">{navLinks}</div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
