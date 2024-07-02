import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import { useParams } from "react-router-dom";
import actGetProductById from "@/Store/Products/act/actGetProductById";
import { useEffect } from "react";
import { cleanProductsRecords } from "@/Store/Products/productsSlice";

const useProductDetails = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { loading, error, singleProduct } = useAppSelector(
        (state) => state.Products
    );

    useEffect(() => {
        dispatch(actGetProductById(params.slug as string));
        return () => {
            dispatch(cleanProductsRecords());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, params]);
    return { loading, error, singleProduct }
}

export default useProductDetails