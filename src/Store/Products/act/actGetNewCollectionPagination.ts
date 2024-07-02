import { axiosInstance } from "@/Services/axioc-global";
import { TProduct } from "@/Types";
import axiosErrorHandler from "@/Utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";


type TCollection = {
    currentPage: number
    productsPerPage: number;
}
type TResponse = {
    data: TProduct[]
    meta: []
}

const actGetNewCollectionPagination = createAsyncThunk("products/actGetNewCollectionPagination",
    async ({ currentPage, productsPerPage }: TCollection, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axiosInstance<TResponse>(`products?page=${currentPage}&limit=${productsPerPage}`)
            return res.data

        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error))
        }
    })


export default actGetNewCollectionPagination