import { TProduct } from "@/Types";
import stripHtmlTags from "@/Utils/stripHtmlTags";
import { NavLink } from "react-router-dom";
import ProductImage from "./ProductImage";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import actAddItemToCart from "@/Store/Cart/act/actAddItemToCart";
import { useState } from "react";
import { AlertDialogPopup, SpinnerLoader } from "../feedback";

type ProductProps = TProduct & {
  imageSize?: string;
  isProductDetails?: boolean;
};

const Product = ({
  description,
  image,
  name,
  price,
  imageSize,
  id,
  isProductDetails = false,
  categories,
}: ProductProps) => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.Auth);
  const { loadingModify } = useAppSelector((state) => state.Cart);
  const [showAlert, setsetShowAlert] = useState(false);

  const handleAddProduct = () => {
    if (accessToken) {
      if (id) {
        dispatch(actAddItemToCart(id));
      }
    } else {
      setsetShowAlert(true);
    }
  };
  return (
    <div className={` ${isProductDetails && "grid lg:grid-cols-7 "}`}>
      <ProductImage url={image.url} imageSize={imageSize} id={id} />
      <div
        className={`${
          isProductDetails &&
          "flex flex-col justify-between lg:col-span-4 lg:mx-6 "
        }`}
      >
        <h1 className={`${isProductDetails && "text-3xl "} font-bold my-2`}>
          {name}
        </h1>
        {isProductDetails && (
          <div className="mt-4">
            <h4>
              {categories && categories.length > 0 && (
                <NavLink to={`/category/${categories[0]?.slug}`}>
                  {categories[0]?.name}
                </NavLink>
              )}
              <span className="text-green-400 text-sm font-semibold border-l-2 ml-2 pl-2">
                In Stock
              </span>
            </h4>
            <h2 className="font-bold mt-5 mb-1">Description</h2>
          </div>
        )}

        <p className="text-sm">
          {isProductDetails
            ? stripHtmlTags(description)
            : stripHtmlTags(description.substring(0, 40) + "...")}
        </p>
        <h3 className="text-gray-500 my-1">{price.formatted_with_symbol}</h3>
        {isProductDetails && (
          <Button
            onClick={handleAddProduct}
            className="mt-5"
            disabled={loadingModify === "pending"}
          >
            {loadingModify === "pending" ? (
              <div className="flex items-center justify-around gap-x-6 ">
                <SpinnerLoader />
                Loading...
              </div>
            ) : (
              "Add to cart"
            )}
          </Button>
        )}
        <AlertDialogPopup
          showAlert={showAlert}
          setsetShowAlert={setsetShowAlert}
          headerMessage="Login required"
          message="You need to log in first to add products to your cart. Please log in or create an account to continue shopping."
          navigateTo="/login?message=login_required"
          textButton="Login Now"
        />
      </div>
    </div>
  );
};

export default Product;
