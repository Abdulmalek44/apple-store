import { TCart, TLoading } from "@/Types";
import { createSlice } from "@reduxjs/toolkit";
import { authLogOut } from "../Auth/authSlice";
import actCreateOrGetCart from "./act/actCreateOrGetCart";
import actAddItemToCart from "./act/actAddItemToCart";
import actDeleteItemFromCart from "./act/actDeleteItemFromCart";
import actUpdateItemInCart from "./act/actUpdateItemInCart";
import actClearCart from "./act/actClearCart";



interface ICartState extends TCart {
    loading: TLoading,
    loadingModify: TLoading,
    error: string | null
}

const storedUserID = localStorage.getItem("cartID")

const initialState: ICartState = {
    cartID: storedUserID ? storedUserID : null,
    total_items: 0,
    subtotal: null,
    line_items: null,
    loading: "idle",
    loadingModify: "idle",
    error: null,

}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cleanCart: (state) => {
            state.line_items = null
            state.subtotal = null
            state.total_items = 0
        }
    },
    extraReducers: (builder) => {

        //Create a new cart
        builder.addCase(actCreateOrGetCart.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        });
        builder.addCase(actCreateOrGetCart.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.error = null
            state.line_items = action.payload.line_items
            state.subtotal = action.payload.subtotal
            state.total_items = action.payload.total_items

            if (action.payload?.id) {
                state.cartID = action.payload.id
                localStorage.setItem("cartID", action.payload.id)
            }
        });
        builder.addCase(actCreateOrGetCart.rejected, (state, action) => {
            state.loading = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        });


        //Add new item to cart
        builder.addCase(actAddItemToCart.pending, (state) => {
            state.loadingModify = 'pending'
            state.error = null
        });
        builder.addCase(actAddItemToCart.fulfilled, (state, action) => {
            state.loadingModify = 'succeeded'
            state.error = null
            state.line_items = action.payload.line_items
            state.subtotal = action.payload.subtotal
            state.total_items = action.payload.total_items
        });
        builder.addCase(actAddItemToCart.rejected, (state, action) => {
            state.loadingModify = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        });


        //Delete item in cart
        builder.addCase(actDeleteItemFromCart.pending, (state) => {
            state.loadingModify = 'pending'
            state.error = null
        });
        builder.addCase(actDeleteItemFromCart.fulfilled, (state, action) => {
            state.loadingModify = 'succeeded'
            state.error = null
            state.line_items = action.payload.line_items
            state.subtotal = action.payload.subtotal
            state.total_items = action.payload.total_items
        });
        builder.addCase(actDeleteItemFromCart.rejected, (state, action) => {
            state.loadingModify = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        });


        //Update item to cart
        builder.addCase(actUpdateItemInCart.pending, (state) => {
            state.loadingModify = 'pending'
            state.error = null
        });
        builder.addCase(actUpdateItemInCart.fulfilled, (state, action) => {
            state.loadingModify = 'succeeded'
            state.error = null
            state.line_items = action.payload.line_items
            state.subtotal = action.payload.subtotal
            state.total_items = action.payload.total_items
        });
        builder.addCase(actUpdateItemInCart.rejected, (state, action) => {
            state.loadingModify = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        });


        //Clears contents of the cart
        builder.addCase(actClearCart.pending, (state) => {
            state.loadingModify = 'pending'
            state.error = null
        });
        builder.addCase(actClearCart.fulfilled, (state, action) => {
            state.loadingModify = 'succeeded'
            state.error = null
            state.line_items = action.payload.line_items
            state.subtotal = action.payload.subtotal
            state.total_items = action.payload.total_items
        });
        builder.addCase(actClearCart.rejected, (state, action) => {
            state.loadingModify = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        });

        //Cleane tge state when logout
        builder.addCase(authLogOut, (state) => {
            state.cartID = null
            localStorage.removeItem("cartID")
            state.line_items = null
            state.subtotal = null
            state.total_items = 0
        })

    }
})

export default cartSlice.reducer
export const { cleanCart } = cartSlice.actions