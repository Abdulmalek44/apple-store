import { TLoading, TUser } from "@/Types";
import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import actGetUserInfo from "./act/actGetUserInfo";
import actUpdateUserInfo from "./act/actUpdateUserInfo";


interface IAuthState {
    accessToken: string | undefined,
    userID: string | undefined,
    cartID: string | undefined,
    user: TUser | null,
    loading: TLoading,
    loadingUpdate: TLoading,
    error: string | null,
}

const storedToken = localStorage.getItem("accessToken")
const storedUserID = localStorage.getItem('userID');

const initialState: IAuthState = {
    accessToken: storedToken ? storedToken : undefined,
    userID: storedUserID ? storedUserID : undefined,
    cartID: undefined,
    user: null,
    loading: "idle",
    loadingUpdate: "idle",
    error: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        cleanErrorState: (state) => {
            state.error = null
        },
        authLogOut: (state) => {
            state.userID = undefined
            state.accessToken = undefined
            localStorage.removeItem("accessToken")
            localStorage.removeItem("userID")
        },
        cleanUserInfo: (state) => {
            state.user = null
        }

    },


    //Register new user
    extraReducers: (builder) => {
        builder.addCase(actAuthRegister.pending, (state) => {
            state.loading = "pending"
            state.error = null
        });
        builder.addCase(actAuthRegister.fulfilled, (state) => {
            state.loading = "succeeded"
            state.error = null
        });
        builder.addCase(actAuthRegister.rejected, (state, action) => {
            state.loading = "failed"
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });


        //Login user
        builder.addCase(actAuthLogin.pending, (state) => {
            state.loading = "pending"
            state.error = null
        });
        builder.addCase(actAuthLogin.fulfilled, (state, action) => {
            state.loading = "succeeded"
            state.error = null
            state.accessToken = action.payload?.token
            state.userID = action.payload?.customer_id

            // Save token to local storage
            if (action.payload?.token) {
                localStorage.setItem('accessToken', action.payload.token);
            }
            if (action.payload?.customer_id) {
                localStorage.setItem('userID', action.payload.customer_id);
            }
        });
        builder.addCase(actAuthLogin.rejected, (state, action) => {
            state.loading = "failed"
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });


        //Get user information
        builder.addCase(actGetUserInfo.pending, (state) => {
            state.loading = "pending"
            state.error = null
        });
        builder.addCase(actGetUserInfo.fulfilled, (state, action) => {
            state.loading = "succeeded"
            state.error = null
            state.user = action.payload

        });
        builder.addCase(actGetUserInfo.rejected, (state, action) => {
            state.loading = "failed"
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });


        //Update user information
        builder.addCase(actUpdateUserInfo.pending, (state) => {
            state.loadingUpdate = "pending"
            state.error = null
        });
        builder.addCase(actUpdateUserInfo.fulfilled, (state, action) => {
            state.loadingUpdate = "succeeded"
            state.error = null
            state.user = action.payload

        });
        builder.addCase(actUpdateUserInfo.rejected, (state, action) => {
            state.loadingUpdate = "failed"
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    }
})

export const { cleanErrorState, authLogOut, cleanUserInfo } = authSlice.actions
export default authSlice.reducer