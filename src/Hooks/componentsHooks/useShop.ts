import actGetCategories from "@/Store/Categories/act/actGetCategories";
import { cleanCategoriesRecords } from "@/Store/Categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import actGetProductsByFilter from "@/Store/Products/act/actGetProductsByFilter";
import { cleanProductsRecords } from "@/Store/Products/productsSlice";
import { TProduct } from "@/Types";
import { useEffect, useState } from "react";

const useShop = () => {
    const [filterCategories, setFilterCategories] = useState<string[]>([]);
    const [paginationFilter, setPaginationFilter] = useState<TProduct[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const dispatch = useAppDispatch();

    const {
        records: categoryRecords,
        error: categoryError,
        loading: categoryLoading,
    } = useAppSelector((state) => state.categories);

    const {
        recordsFilter: productRecords,
        error: productError,
        loading: productLoading,
    } = useAppSelector((state) => state.Products);

    const totalProducts = productRecords.length
    const TotalPages =
        productRecords && Math.ceil(totalProducts / productsPerPage);
    const lastIndex =
        totalProducts < productsPerPage
            ? totalProducts
            : totalProducts > currentPage * productsPerPage
                ? currentPage * productsPerPage
                : totalProducts;
    const firstIndex =
        totalProducts < productsPerPage ? 0 : lastIndex - productsPerPage;

    useEffect(() => {
        dispatch(actGetCategories());
        return () => {
            dispatch(cleanCategoriesRecords());
            dispatch(cleanProductsRecords());
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(actGetProductsByFilter({ slug: filterCategories }));
        setCurrentPage(1);
    }, [dispatch, filterCategories]);

    useEffect(() => {
        const handlePagination = () => {
            if (totalProducts > productsPerPage) {
                setPaginationFilter(productRecords.slice(firstIndex, lastIndex));
            } else {
                setPaginationFilter(productRecords);
            }
        };
        handlePagination();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, productRecords]);
    return {
        categoryError,
        categoryLoading,
        categoryRecords,
        filterCategories,
        setFilterCategories,
        productError,
        productLoading,
        firstIndex,
        lastIndex,
        totalProducts,
        paginationFilter,
        productRecords,
        currentPage,
        TotalPages,
        setCurrentPage,
    }
}
export default useShop