import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./apis/blog.api";


const reduxStore = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
    },
    middleware: def => def().concat(blogApi.middleware)
})

export default reduxStore