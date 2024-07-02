import { TLineItems, TLoading, TPrice } from "@/Types";
import { SpinnerLoader } from "../feedback";
import { Button } from "../ui/button";
import CheckOutTable from "./CheckOutTable";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import checkout from "@/assets/lottieFiles/checkout.json";

type TChechOutContant = {
  lineItems: TLineItems[] | null;
  subtotal: TPrice | null;
  loadingModify: TLoading;
  DeleteAllItem: () => void;
};
const ChechOutContant = ({
  lineItems,
  subtotal,
  loadingModify,
  DeleteAllItem,
}: TChechOutContant) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-bold lg:text-3xl text-2xl my-4 max-lg:mx-4">
        Checkout
      </h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 ">
        <div className="col-span-1 lg:mt-20 max-lg:flexCenter max-lg:mb-6">
          <Lottie
            animationData={checkout}
            className="w-8/12 max-lg:my-6 object-contain"
          />
        </div>
        <div className="col-span-2">
          <CheckOutTable lineItems={lineItems} />
          <div className="lg:ml-4 flexBetween p-4 my-4 mt-3 bg-secondary dark:bg-main-hover-bg-dark">
            <h1 className="font-bold text-lg ">Order Total</h1>
            <h1 className=" font-bold text-lg ">
              {subtotal?.formatted_with_symbol}
            </h1>
          </div>
          <div className=" flex max-lg:flex-col justify-end gap-x-2 max-lg:mx-5 gap-y-2 ">
            <Button variant="outline" onClick={() => navigate("/cart")}>
              Bcak to cart
            </Button>
            <Button
              className="lg:w-32"
              disabled={loadingModify === "pending"}
              onClick={DeleteAllItem}
            >
              {loadingModify === "pending" ? (
                <div className="flex items-center justify-around gap-x-4 ">
                  <SpinnerLoader />
                  Loading...
                </div>
              ) : (
                "Checkout"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChechOutContant;
