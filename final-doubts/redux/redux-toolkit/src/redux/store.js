import { configureStore } from "@reduxjs/toolkit";

import bankSlice from "./bank.slice"

const reduxStore = configureStore({
    reducer: {
        hdfc: bankSlice,
    },
})

export default reduxStore