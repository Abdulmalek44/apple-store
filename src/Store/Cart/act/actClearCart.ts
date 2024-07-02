import { axiosInstance } from "@/Services/axioc-global"
import { RootState } from "@/Store"
import { TCart } from "@/Types";
import axiosErrorHandler from "@/Utils/axiosErrorHandler"
import { createAsyncThunk } from "@reduxjs/toolkit"


type TResponseCart = TCart;

const actClearCart = createAsyncThunk("cart/actClearCart", async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const { Cart } = getState() as RootState
    const cartID = Cart.cartID

    try {
        const res = await axiosInstance.delete<TResponseCart>(`/carts/${cartID}/items`)
        return res.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actClearCart