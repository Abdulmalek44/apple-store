import { LottieHandler } from "@/components/feedback";

const Purchases = () => {
  return (
    <div className="col-span-2 flexCenter flex-col max-lg:mt-20">
      <h2 className="text-xl font-semibold">No Purchases Yet</h2>
      <p className="text-main-text-hover mt-4 max-w-96 text-center">
        You haven't made any purchases yet. Explore our products and start
        shopping!
      </p>
      <LottieHandler type="emptyBox" Style="lg:w-4/12 w-9/12" fullscreen />
    </div>
  );
};

export default Purchases;
