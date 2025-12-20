import { createSlice } from "@reduxjs/toolkit";
import { createBlog, readBlog } from "../actions/blog.actions";

const blogSlice = createSlice({
    name: "blogSlice",
    initialState: { allBlogs: [] },
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(createBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(createBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.success = true
        })
        .addCase(createBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(readBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(readBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.allBlogs = payload
        })
        .addCase(readBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = blogSlice.actions
export default blogSlice.reducer