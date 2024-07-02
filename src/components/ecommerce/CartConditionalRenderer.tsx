import { TLineItems, TLoading } from "@/Types";
import { LottieHandler, Toast } from "../feedback";

type TRenderers = {
  accessToken: string | undefined;
  loading: TLoading;
  line_items: TLineItems[] | null;
  error: string | null;
};

const CartConditionalRenderers = ({
  accessToken,
  loading,
  line_items,
  error,
}: TRenderers) => {
  if (!accessToken) {
    return (
      <div className="flexCenter ">
        <Toast message="You need to login first" />
      </div>
    );
  }

  if (loading === "pending") {
    return <LottieHandler type="loadingDots" Style=" mb-4 w-5/12" />;
  }

  if (line_items?.length === 0) {
    return (
      <LottieHandler type="empty" message="Your cart is empty" Style=" mb-4" />
    );
  }

  if (error) {
    return (
      <LottieHandler type="error" message={error as string} Style=" mb-4" />
    );
  }

  return null; // Or some default UI if none of the conditions are met
};

export default CartConditionalRenderers;
