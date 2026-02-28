import { APP_URL } from "@/constants/config"
import { Blog } from "@/types/Blog"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${APP_URL}/api/blog`,
        credentials: "include"
    }),
    tagTypes: ["blog"],
    endpoints: (builder) => {
        return {
            getBlogs: builder.query<Blog[], void>({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation<void, FormData>({
                query: blogData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation<void, Blog>({
                query: blogData => {
                    return {
                        url: "/modify/" + blogData._id,
                        method: "PUT",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deleteBlog: builder.mutation<void, String>({
                query: _id => {
                    return {
                        url: "/remove/" + _id,
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
