import { cleanCart } from '@/Store/Cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/Store/hooks';
import { useEffect } from 'react';

const useCart = () => {
    const { line_items, subtotal, loading, error, loadingModify } =
        useAppSelector((state) => state.Cart);
    const { accessToken } = useAppSelector((state) => state.Auth);
    const dispatch = useAppDispatch(); loading

    useEffect(() => {
        () => {
            dispatch(cleanCart());
        };
    }, [dispatch]);
    return { line_items, subtotal, loading, error, loadingModify, accessToken }
}

export default useCart