import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        tpo: JSON.parse(localStorage.getItem("TPO")),
        student: JSON.parse(localStorage.getItem("STUDENT")),
        company: JSON.parse(localStorage.getItem("COMPANY")),
    },
    reducers: {
        //                  👇 action argument
        logout: (state, { payload }) => {
            switch (payload) {
                case "tpo":
                    localStorage.removeItem("TPO");
                    state.tpo = null;
                    break;
                case "student":
                    localStorage.removeItem("STUDENT");
                    state.student = null;
                    break;
                case "company":
                    localStorage.removeItem("COMPANY");
                    state.company = null;
                    break;
                default: break;
            }
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            //      👇 return of transformResponse from login query
            switch (payload.role) {
                case "tpo": state.tpo = payload; break;
                case "student": state.student = payload; break;
                case "company": state.company = payload; break;
                default: break;
            }
        })

})

export const { logout } = authSlice.actions
export default authSlice.reducer