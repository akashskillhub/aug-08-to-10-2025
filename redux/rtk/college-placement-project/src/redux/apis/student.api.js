import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const studentApi = createApi({
    reducerPath: "studentApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["apply"],
    endpoints: (builder) => {
        return {
            readStudentJob: builder.query({
                query: () => {
                    return {
                        url: "/jobs",
                        method: "GET",
                        params: { publish: true }
                    }
                },
                providesTags: ["apply"]
            }),
            applyJob: builder.mutation({
                query: jobData => {
                    return {
                        url: "/applications",
                        method: "POST",
                        body: jobData
                    }
                },
                invalidatesTags: ["apply"]
            }),
            updateProfile: builder.mutation({
                query: userData => {
                    return {
                        url: "/users/" + userData.id,
                        method: "PATCH",
                        body: userData
                    }
                },

                invalidatesTags: []
            }),
            readStudentComapny: builder.query({
                query: userData => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: { role: "company" }
                    }
                },
                invalidatesTags: []
            }),
            checkApply: builder.query({
                query: applyData => {
                    return {
                        url: "/applications",
                        method: "GET",
                    }
                },
                providesTags: ["apply"]


            }),

        }
    }
})

export const {
    useApplyJobMutation,
    useReadStudentJobQuery,
    useUpdateProfileMutation,
    useReadStudentComapnyQuery,
    useLazyCheckApplyQuery,
    useCheckApplyQuery
} = studentApi
