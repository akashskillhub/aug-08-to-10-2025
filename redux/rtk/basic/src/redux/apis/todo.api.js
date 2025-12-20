import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: builder => {
        return {
            createTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/todos",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["test"]
            }), // create, update, delete

            readTodo: builder.query({
                query: todoData => {
                    return {
                        url: "/todos",
                        method: "GET",
                    }
                },
                providesTags: ["test"]
            }), // read

            deleteTodo: builder.mutation({
                query: id => {
                    return {
                        url: "/todos/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["test"]
            }), // read
        }
    }
})

//              👇 actions
export const {
    useCreateTodoMutation,
    useReadTodoQuery,
    useDeleteTodoMutation } = todoApi