import { axiosInstance } from "@/Services/axioc-global";
import { TProduct } from "@/Types";
import axiosErrorHandler from "@/Utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TResponse = {
    data: TProduct[]
    meta: []
}

const actGetProductsBySlug = createAsyncThunk("products/actGetProductsBySlug", async (slug: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axiosInstance.get<TResponse>(`/products?category_slug=${slug}`)
        return res.data

    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actGetProductsBySlug

