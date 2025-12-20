import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { admin: JSON.parse(localStorage.getItem("rtk-admin")) },
    reducers: {
        signout: (state, { payload }) => {
            state.admin = null
            localStorage.removeItem("rtk-admin")
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })

})

export const { signout } = authSlice.actions
export default authSlice.reducer