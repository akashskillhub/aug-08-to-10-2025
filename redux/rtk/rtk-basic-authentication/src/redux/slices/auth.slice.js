import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { admin: JSON.parse(localStorage.getItem("rtk-admin")) },
    reducers: {
        // only redux action+reducer
        signout: (state, { payload }) => {
            localStorage.removeItem("rtk-admin")
            state.admin = null
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })

})

export const { signout } = authSlice.actions
export default authSlice.reducer