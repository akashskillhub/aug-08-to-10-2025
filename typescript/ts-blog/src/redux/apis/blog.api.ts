import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Blog } from "../../types/Blog"

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["blog"],
    endpoints: (builder) => {
        return {
            getBlogs: builder.query<Blog[], void>({
                query: () => {
                    return {
                        url: "/blogs",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation<void, Blog>({
                query: blogData => {
                    return {
                        url: "/blogs",
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation<void, Blog>({
                query: blogData => {
                    return {
                        url: "/blogs/" + blogData.id,
                        method: "PATCH",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deleteBlog: builder.mutation<void, number>({
                query: id => {
                    return {
                        url: "/blogs/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["blog"]
            }),

        }
    }
})

export const {
    useAddBlogMutation,
    useDeleteBlogMutation,
    useGetBlogsQuery,
    useUpdateBlogMutation
} = blogApi
