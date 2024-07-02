import { axiosInstance } from "@/Services/axioc-global";
import { RootState } from "@/Store";
import { TUser } from "@/Types";
import axiosErrorHandler from "@/Utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TuserData = {
    email?: string,
    firstname?: string,
    lastname?: string,
}

type TResponse = TUser;

const actUpdateUserInfo = createAsyncThunk("auth/actUpdateUserInfo", async ({ email, firstname, lastname }: TuserData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { Auth } = getState() as RootState;
    const userID = Auth.userID;

    if (!userID) {
        return rejectWithValue(
            "User ID is not available, You need to log in first"
        );
    }

    const payload: Partial<TuserData> = {};
    if (email) payload.email = email;
    if (firstname) payload.firstname = firstname;
    if (lastname) payload.lastname = lastname;
    try {
        const res = await axiosInstance.put<TResponse>(`/customers/${userID}`, payload);
        return res.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
}
);

export default actUpdateUserInfo;
