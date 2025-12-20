import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./slices/product.slice"
const reduxStore = configureStore({
    reducer: {
        inventory: productSlice,
    },
})

export default reduxStore