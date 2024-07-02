import actGetCategories from "@/Store/Categories/act/actGetCategories";
import { cleanCategoriesRecords } from "@/Store/Categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import { useEffect } from "react";

const useShopCategories = () => {
    const dispatch = useAppDispatch();
    const { records, error, loading } = useAppSelector(
        (state) => state.categories
    );

    const categoryRecords = records.filter((record) => record.name != "AirPods");

    useEffect(() => {
        dispatch(actGetCategories());
        return () => {
            dispatch(cleanCategoriesRecords());
        }
    }, [dispatch]);
    return { categoryRecords, error, loading }
}

export default useShopCategories