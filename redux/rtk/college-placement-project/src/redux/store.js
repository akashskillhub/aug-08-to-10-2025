import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";

import authSlice from "./slices/auth.slice"
import { tpoApi } from "./apis/tpo.api";
import { companyApi } from "./apis/company.api";
const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [tpoApi.reducerPath]: tpoApi.reducer,
        [companyApi.reducerPath]: companyApi.reducer,
        auth: authSlice
    },
    middleware: def => [
        ...def(),
        authApi.middleware,
        tpoApi.middleware,
        companyApi.middleware
    ]
})

export default reduxStore