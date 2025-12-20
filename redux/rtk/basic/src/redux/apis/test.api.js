import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const testApi = createApi({
    reducerPath: "testApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["notes"],
    endpoints: (builder) => {
        return {
            getAllTodos: builder.query({
                query: () => {
                    return {
                        url: "/todos",
                        method: "GET"
                    }
                },
                providesTags: ["notes"]
            }),
            addTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/todos",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["notes"]
            }),
            updateTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/todos/" + todoData.id,
                        method: "PATCH",
                        body: todoData
                    }
                },
                invalidatesTags: ["notes"]
            }),
            deleteTodo: builder.mutation({
                query: id => {
                    return {
                        url: "/todos/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["notes"]
            }),

        }
    }
})

export const {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetAllTodosQuery,
    useUpdateTodoMutation
} = testApi
