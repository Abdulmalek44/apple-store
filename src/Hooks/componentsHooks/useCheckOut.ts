import actClearCart from "@/Store/Cart/act/actClearCart";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";

const useCheckOut = () => {
    const [searchParams] = useSearchParams("");
    const { line_items, loadingModify, subtotal } = useAppSelector(
        (state) => state.Cart
    );
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const DeleteAllItem = () => {
        dispatch(actClearCart())
            .unwrap()
            .then(() => navigate("/checkout?message=order_has_successfully_placed"));
    };
    return { line_items, loadingModify, subtotal, searchParams, DeleteAllItem }
}

export default useCheckOut