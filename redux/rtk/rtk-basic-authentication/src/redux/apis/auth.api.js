import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: [],
    endpoints: (builder) => {
        return {
            signin: builder.query({
                query: userData => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: userData
                    }
                },
                transformResponse: (data, meta) => {
                    if (data.length === 0) {
                        throw new Error("Invalid credntails") // custom error
                    } else {
                        localStorage.setItem("rtk-admin", JSON.stringify(data[0]))
                        return data[0]
                    }
                },
                transformErrorResponse: () => { },
                providesTags: []
            }),
            signup: builder.mutation({
                query: userData => {
                    return {
                        url: "/users",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: []
            }),

        }
    }
})

export const { useSigninQuery, useLazySigninQuery, useSignupMutation } = authApi
