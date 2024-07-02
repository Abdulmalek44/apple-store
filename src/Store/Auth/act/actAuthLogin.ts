import { axiosInstance } from "@/Services/axioc-global"
import axiosErrorHandler from "@/Utils/axiosErrorHandler"
import { createAsyncThunk } from "@reduxjs/toolkit"


type TResponse = {
    token: string,
    customer_id: string,
}

const actAuthLogin = createAsyncThunk("auth/actAuthLogin", async (email: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axiosInstance.post<TResponse>("/customers/issue-token", {
            email: email, base_url: "https://yourwebsite.com/login/callback"
        })
        return res.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actAuthLogin