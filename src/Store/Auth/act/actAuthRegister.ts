import { axiosInstance } from "@/Services/axioc-global";
import axiosErrorHandler from "@/Utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";


type TuserData = {
    email: string,
    firstname: string,
    lastname: string,
}

type TResponse = {
    id: string,
    external_id: string | null,
    email: string,
    firstname: string,
    lastname: string,
}


const actAuthRegister = createAsyncThunk("auth/actAuthRegister", async (data: TuserData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axiosInstance.post<TResponse>("/customers", data)
        return res.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }

})

export default actAuthRegister