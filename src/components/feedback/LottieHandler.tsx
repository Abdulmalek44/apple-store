import Lottie from "lottie-react";
import empty from "@/assets/lottieFiles/empty.json";
import error from "@/assets/lottieFiles/error.json";
import notFound from "@/assets/lottieFiles/notFound.json";
import success from "@/assets/lottieFiles/success.json";
import checkout from "@/assets/lottieFiles/checkout.json";
import appleAuth from "@/assets/lottieFiles/apple-auth.json";
import order from "@/assets/lottieFiles/order.json";
import emptyBox from "@/assets/lottieFiles/emptyBox.json";
import loadingDots from "@/assets/lottieFiles/loading-dots.json";

const Lottihandlermap = {
  empty: empty,
  error: error,
  notFound: notFound,
  success: success,
  checkout: checkout,
  appleAuth: appleAuth,
  order: order,
  emptyBox: emptyBox,
  loadingDots: loadingDots,
};

type LottieHandlerprops = {
  message?: string;
  type: keyof typeof Lottihandlermap;
  Style?: string;
  fullscreen?: boolean;
};

const LottieHandler = ({
  message,
  type,
  Style,
  fullscreen,
}: LottieHandlerprops) => {
  const lottie = Lottihandlermap[type];
  return (
    <div className={`w-full ${!fullscreen && "h-[85vh]"}  flexCenter flex-col`}>
      <div className="flexCenter flex-col ">
        <Lottie
          animationData={lottie}
          className={Style ? Style : "h-2/6 md:h-1/6"}
        />
        {message && <h1 className="font-semibold text-lg ">{message}</h1>}
      </div>
    </div>
  );
};

export default LottieHandler;
