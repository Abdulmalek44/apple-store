import { useNavigate } from "react-router-dom";
import { Tooltip } from "../common";
import Cart from "@/assets/svg/cart.svg?react";
import { useEffect, useState } from "react";

const CartHeader = ({ totalItems }: { totalItems: number }) => {
  const [activeAnimate, setActiveAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!totalItems) {
      return;
    }

    setActiveAnimate(true);
    const debounce = setTimeout(() => {
      setActiveAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalItems]);

  return (
    <div className="relative">
      <Tooltip
        componente={
          <Cart
            className="icon text-black dark:text-gray-300 cursor-pointer "
            onClick={() => navigate("/cart")}
          />
        }
        message="Cart"
      />
      {totalItems > 0 && (
        <span
          className={`absolute bg-red-500 p-1 text-xs h-5 w-5 font-semibold rounded-full flexCenter -top-0.5 -right-1  ${
            activeAnimate ? "animate-bounce" : ""
          } `}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartHeader;
