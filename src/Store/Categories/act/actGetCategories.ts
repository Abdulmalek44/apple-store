import { axiosInstance } from "@/Services/axioc-global";
import { TCategory } from "@/Types";
import axiosErrorHandler from "@/Utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";


type TResponse = {
    data: TCategory[]
    meta: []
}

const actGetCategories = createAsyncThunk('categories/actGetCategories', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axiosInstance.get<TResponse>('categories?depth=2')
        return res.data

    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actGetCategories