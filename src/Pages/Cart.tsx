import {
  CartConditionalRenderers,
  CartTable,
  ContinueShopping,
  Summary,
} from "@/components/ecommerce";
import useCart from "@/Hooks/componentsHooks/useCart";
const Cart = () => {
  const { line_items, subtotal, loading, error, loadingModify, accessToken } =
    useCart();

  return (
    <div className="w-full min-h-[80vh] flex flex-col my-3">
      <CartConditionalRenderers
        accessToken={accessToken}
        error={error}
        line_items={line_items}
        loading={loading}
      />
      <div className="max-w-6xl w-full mx-auto flex flex-col">
        <div>
          <h1 className="font-bold lg:text-3xl text-2xl my-5 max-lg:mx-4">
            Cart
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 max-lg:mx-2 gap-y-4">
            <CartTable lineItems={line_items} loadingModify={loadingModify} />
            <Summary subtotal={subtotal} />
          </div>
        </div>
        <div className="flex-grow" />
        <ContinueShopping />
      </div>
    </div>
  );
};

export default Cart;
