import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";
import { LOGIN_RESPONSE } from "@/types/User";

type authType = {
    admin: LOGIN_RESPONSE | null
}

const initialState: authType = {
    admin: JSON.parse(localStorage.getItem("admin") as string)
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.signout.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })
})

// export const { invalidate } = authSlice.actions
export default authSlice.reducer