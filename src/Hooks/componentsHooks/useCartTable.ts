import actDeleteItemFromCart from "@/Store/Cart/act/actDeleteItemFromCart";
import { useAppDispatch } from "@/Store/hooks";
import actUpdateItemInCart from "@/Store/Cart/act/actUpdateItemInCart";

const useCartTable = () => {
    const dispatch = useAppDispatch();

    const DeleteProduct = (id: string) => {
        dispatch(actDeleteItemFromCart(id));
    };

    const increaseQuantity = (id: string, quantity: number) => {
        dispatch(actUpdateItemInCart({ itemId: id, quantity: quantity + 1 }));
    };

    const decreaseQuantity = (id: string, quantity: number) => {
        if (quantity > 1) {
            dispatch(actUpdateItemInCart({ itemId: id, quantity: quantity - 1 }));
        }
    };

    return { DeleteProduct, increaseQuantity, decreaseQuantity }
}

export default useCartTable