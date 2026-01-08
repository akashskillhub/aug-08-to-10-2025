import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getTodo: builder.query({
                query: (filter) => {
                    return {
                        url: "/notes",
                        method: "GET",
                        params: { _limit: filter.limit, _page: filter.page } // 👈 only valid for json-server
                    }
                },
                transformResponse: (data, { response }) => {
                    return { result: data, total: response.headers.get('X-Total-Count') }
                },
                providesTags: ["todo"]
            }),
            addTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/notes",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            modifyTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/notes/" + todoData.id,
                        method: "PATCH",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            removeTodo: builder.mutation({
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
    useGetTodoQuery,
    useModifyTodoMutation,
    useRemoveTodoMutation
} = adminApi
