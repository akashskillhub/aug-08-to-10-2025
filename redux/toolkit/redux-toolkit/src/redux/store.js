import { configureStore } from "@reduxjs/toolkit";

import blogSlice from './slices/blog.slice'

const reduxStore = configureStore({
    reducer: {
        devBlog: blogSlice,
    },
})

export default reduxStore