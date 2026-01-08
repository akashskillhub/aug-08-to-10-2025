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
                        params: userData // 👈  {email:"john@gmail.com", passsword:"123"}
                    }
                },
                //                 👇any argument 
                transformResponse: data => {
                    if (data.length === 0) {
                        throw new Error("Invalid Credentials")
                    } else {
                        localStorage.setItem("ADMIN", JSON.stringify(data[0]))
                        return data[0]
                    }
                },
                transformErrorResponse: () => {
                    return "kuch to gdbd hai"
                },
                providesTags: []
            }),
        }
    }
})

export const { useSigninQuery, useLazySigninQuery } = authApi
