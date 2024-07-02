import { axiosInstance } from "@/Services/axioc-global";
import { RootState } from "@/Store";
import { TUser } from "@/Types";
import axiosErrorHandler from "@/Utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TResponse = TUser;

const actGetUserInfo = createAsyncThunk(
  "auth/actGetUserInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { Auth } = getState() as RootState;
    const userID = Auth.userID;

    if (!userID) {
      return rejectWithValue(
        "User ID is not available, You need to log in first"
      );
    }

    try {
      const res = await axiosInstance.get<TResponse>(`/customers/${userID}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetUserInfo;
