import { axiosInstance } from "@/Services/axioc-global"
import { RootState } from "@/Store";
import { TCart } from "@/Types"
import axiosErrorHandler from "@/Utils/axiosErrorHandler"
import { createAsyncThunk } from "@reduxjs/toolkit"


type TResponseCart = TCart;

const actDeleteItemFromCart = createAsyncThunk("cart/actDeleteItemFromCart", async (itemId: string, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const { Cart } = getState() as RootState
    const cartID = Cart.cartID
    try {
        const response = await axiosInstance.delete<TResponseCart>(`/carts/${cartID}/items/${itemId}`)
        return response.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actDeleteItemFromCart