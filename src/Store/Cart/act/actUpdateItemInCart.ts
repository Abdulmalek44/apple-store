import { axiosInstance } from "@/Services/axioc-global"
import { RootState } from "@/Store"
import { TCart } from "@/Types"
import axiosErrorHandler from "@/Utils/axiosErrorHandler"
import { createAsyncThunk } from "@reduxjs/toolkit"

type TDeleteItem = {
    quantity: number,
    itemId: string,
}

type TResponseCart = TCart;

const actUpdateItemInCart = createAsyncThunk("cart/actUpdateItemInCart", async ({ itemId, quantity }: TDeleteItem, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const { Cart } = getState() as RootState
    const cartID = Cart.cartID
    try {
        const response = await axiosInstance.put<TResponseCart>(`/carts/${cartID}/items/${itemId}`,
            { quantity }
        )
        return response.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actUpdateItemInCart