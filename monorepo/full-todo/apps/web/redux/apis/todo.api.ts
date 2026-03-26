import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TODO_CREATE_REQUEST, TODO_CREATE_RESPONSE, TODO_DELETE_REQUEST, TODO_DELETE_RESPONSE, TODO_READ_REQUEST, TODO_READ_RESPONSE, TODO_UPDATE_REQUEST, TODO_UPDATE_RESPONSE } from "@repo/types"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/todo", credentials: "include" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getTodos: builder.query<TODO_READ_RESPONSE, TODO_READ_REQUEST>({
                query: () => {
                    return {
                        url: "/read",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addTodo: builder.mutation<TODO_CREATE_RESPONSE, TODO_CREATE_REQUEST>({
                query: todoData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateTodo: builder.mutation<TODO_UPDATE_RESPONSE, TODO_UPDATE_REQUEST>({
                query: todoData => {
                    return {
                        url: "/update/" + todoData._id,
                        method: "PUT",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteTodo: builder.mutation<TODO_DELETE_RESPONSE, TODO_DELETE_REQUEST>({
                query: todoData => {
                    return {
                        url: "/remove/" + todoData._id,
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
