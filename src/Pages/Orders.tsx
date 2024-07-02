import { LottieHandler } from "@/components/feedback";

const Orders = () => {
  return (
    <div className="col-span-2 flexCenter flex-col max-lg:mt-20">
      <h2 className="text-xl font-semibold">No Orders Yet</h2>
      <p className="text-main-text-hover mt-4 max-w-96 text-center">
        It looks like you haven't placed any orders yet. Browse our products and
        make your first purchase!
      </p>
      <LottieHandler type="order" Style="lg:w-4/12 w-9/12" fullscreen />
    </div>
  );
};

export default Orders;
