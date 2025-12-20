import { createSlice } from "@reduxjs/toolkit";
import { signin } from "../actions/auth.actions";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        admin: JSON.parse(localStorage.getItem("local-admin")),
        employee: JSON.parse(localStorage.getItem("local-employee")),
    },
    reducers: {
        // 👇 action+reducer
        signout: (state, { payload }) => {
            state.admin = null
            state.success = false
            state.error = false
            localStorage.removeItem("local-admin")

        },
        empSignout: (state, { payload }) => {
            state.employee = null
            state.success = false
            state.error = false
            localStorage.removeItem("local-employee")

        },
    },
    extraReducers: builder => builder
        .addCase(signin.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(signin.fulfilled, (state, { payload }) => {
            state.loading = false
            state.success = true
            if (payload.role === "admin") {
                state.admin = payload
                state.currentUser = "admin"
            } else {
                state.employee = payload
                state.currentUser = "employee"
            }
        })
        .addCase(signin.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { signout, empSignout } = authSlice.actions
export default authSlice.reducer