import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth.slice"
import adminSlice from "./slices/admin.slice"
import employeeSlice from "./slices/employee.slice"
const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
        admin: adminSlice,
        employee: employeeSlice
    },
})

export default reduxStore