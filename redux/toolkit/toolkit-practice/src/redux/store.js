import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./slices/product.slice"
const reduxStore = configureStore({
    reducer: {
        products: productSlice,
    },
})

export default reduxStore