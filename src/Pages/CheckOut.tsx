import { ChechOutContant } from "@/components/ecommerce";
import { LottieHandler } from "@/components/feedback";
import useCheckOut from "@/Hooks/componentsHooks/useCheckOut";

const CheckOut = () => {
  const { line_items, loadingModify, subtotal, searchParams, DeleteAllItem } =
    useCheckOut();

  return (
    <div className="w-full min-h-[80vh]  flex-col my-3">
      <div className="max-w-6xl w-full mx-auto mt-7 flex-col">
        {searchParams.get("message") === "order_has_successfully_placed" ? (
          <div className="flexCenter flex-col gap-y-3">
            <h1 className="font-bold text-3xl my-4"> Order Confirmed!</h1>
            <LottieHandler type="success" fullscreen Style=" lg:w-4/12" />
          </div>
        ) : (
          <ChechOutContant
            DeleteAllItem={DeleteAllItem}
            lineItems={line_items}
            loadingModify={loadingModify}
            subtotal={subtotal}
          />
        )}
      </div>
    </div>
  );
};

export default CheckOut;
