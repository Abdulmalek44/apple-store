import { axiosInstance } from "@/Services/axioc-global";
import { TProduct } from "@/Types";
import axiosErrorHandler from "@/Utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";


type TResponse = TProduct



const actGetProductById = createAsyncThunk("product/actGetProductById", async (id: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {

        const res = await axiosInstance.get<TResponse>(`products/${id}`)
        return res.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actGetProductById