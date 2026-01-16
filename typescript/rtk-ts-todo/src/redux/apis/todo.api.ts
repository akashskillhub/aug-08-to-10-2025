import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { TODO_TYPE } from "../../types/note"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getNotes: builder.query<TODO_TYPE[], void>({
                query: () => {
                    return {
                        url: "/notes",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addNote: builder.mutation<void, TODO_TYPE>({
                query: todoData => {
                    return {
                        url: "/notes",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateNote: builder.mutation<void, TODO_TYPE>({
                query: todoData => {
                    return {
                        url: "/notes/" + todoData.id,
                        method: "PATCH",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteNote: builder.mutation<void, number>({
                query: id => {
                    return {
                        url: "/notes/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["todo"]
            }),

        }
    }
})

export const {
    useAddNoteMutation,
    useDeleteNoteMutation,
    useGetNotesQuery,
    useUpdateNoteMutation
} = todoApi
