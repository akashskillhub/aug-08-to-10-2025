import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Note } from "../../types/Note"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getTodos: builder.query<Note[], void>({
                query: () => {
                    return {
                        url: "/notes",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addTodo: builder.mutation<void, Note>({
                query: todoData => {
                    return {
                        url: "/notes",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateTodo: builder.mutation<void, Note>({
                query: todoData => {
                    return {
                        url: "/notes/" + todoData.id,
                        method: "PATCH",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteTodo: builder.mutation<void, number>({
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
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetTodosQuery,
    useUpdateTodoMutation
} = todoApi
