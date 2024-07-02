import { useEffect } from "react";
import Sun from "@/assets/svg/sun.svg?react";
import Moon from "@/assets/svg/moon.svg?react";
import useLocalStorage from "@/Hooks/useLocalStorage";

const DarkModeToggle = () => {
  const [theme, setTheme] = useLocalStorage<string>("theme", "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="">
      {theme === "dark" ? (
        <Sun
          className="icon cursor-pointer text-gray-300"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Moon
          className="icon cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModeToggle;
