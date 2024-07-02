import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const ContinueShopping = () => {
  return (
    <div className="flexBetween max-lg:flex-col max-lg:gap-y-6 lg:p-12 p-6 mt-8 max-lg:mx-2 max-lg:my-8 bg-main-bg dark:bg-main-hover-bg-dark ">
      <div>
        <h2 className="text-xl font-semibold mb-2">Continue shopping</h2>
        <p>
          Discover more products that are perfect for gift, for your wardrobe,
          or a unique addition to your collection.
        </p>
      </div>
      <NavLink to="/shop">
        <Button className="font-light">Continue shopping</Button>
      </NavLink>
    </div>
  );
};

export default ContinueShopping;
