import { axiosInstance } from "@/Services/axioc-global"
import { RootState } from "@/Store"
import { TCart } from "@/Types"
import axiosErrorHandler from "@/Utils/axiosErrorHandler"
import { createAsyncThunk } from "@reduxjs/toolkit"

type TResponseCart = TCart;

const actAddItemToCart = createAsyncThunk("cart/actAddItemToCart", async (itemId: string, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const { Cart } = getState() as RootState
    const CartID = Cart.cartID
    try {
        const response = await axiosInstance.post<TResponseCart>(`/carts/${CartID}`, {
            id: itemId,
            quantity: 1
        })
        return response.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actAddItemToCart