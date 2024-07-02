import { axiosInstance } from "@/Services/axioc-global";
import { RootState } from "@/Store";
import { TCart } from "@/Types";
import axiosErrorHandler from "@/Utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TResponse = {
  id: string;
  external_id: string | null;
  firstname: string;
  lastname: string;
  email: string;
};

type TCartWithID = Omit<TCart, "cartID"> & { id: string | null };
const actCreateOrGetCart = createAsyncThunk(
  "cart/actCreateOrGetCart",
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
      const isUserCartExist = await axiosInstance.get<TResponse>(
        `/customers/${userID}`
      );
      const cartID = isUserCartExist.data.external_id;

      if (!cartID) {
        const newCart = await axiosInstance.get<TCartWithID>("/carts");
        const CartID = newCart.data.id;
        await axiosInstance.put(`/customers/${userID}`, {
          external_id: CartID,
        });
        return newCart.data;
      }

      const existingCart = await axiosInstance.get<TCartWithID>(
        `/carts/${cartID}`
      );
      return existingCart.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actCreateOrGetCart;
