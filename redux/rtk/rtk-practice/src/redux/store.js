import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./apis/product.api";
import { publicApi } from "./apis/public.api";

import cartSlice from "./slices/cart.slice"

const reduxStore = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        skillhub: cartSlice
    },
    middleware: def => [...def(), productApi.middleware, publicApi.middleware]
})

export default reduxStore