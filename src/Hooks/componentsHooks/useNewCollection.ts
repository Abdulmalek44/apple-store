import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import actGetNewCollectionProducts from "@/Store/Products/act/actGetNewCollectionPagination";
import { cleanProductsRecords } from "@/Store/Products/productsSlice";
import { useEffect, useState } from "react";

const useNewCollection = () => {
    const { newCollection, loading, error } = useAppSelector(
        (state) => state.Products
    );
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const TotalProducts = 15;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage + 1;

    useEffect(() => {
        dispatch(actGetNewCollectionProducts({ currentPage, productsPerPage }));
        return () => {
            dispatch(cleanProductsRecords());
        }
    }, [currentPage, productsPerPage, dispatch]);
    return { newCollection, loading, error, TotalProducts, firstIndex, lastIndex, currentPage, setCurrentPage }
}

export default useNewCollection