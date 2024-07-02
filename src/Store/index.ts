import { configureStore } from "@reduxjs/toolkit";
import categories from "./Categories/categoriesSlice";
import Products from "./Products/productsSlice";
import Cart from "./Cart/cartSlice";
import Auth from "./Auth/authSlice";

const store = configureStore({
    reducer: {
        categories,
        Products,
        Cart,
        Auth,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store