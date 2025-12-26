import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const companyApi = createApi({
    reducerPath: "companyApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["job"],
    endpoints: (builder) => {
        return {
            companyJob: builder.query({
                query: () => {
                    return {
                        url: "/jobs",
                        method: "GET"
                    }
                },
                providesTags: ["job"]
            }),
            createJob: builder.mutation({
                query: jobData => {
                    return {
                        url: "/jobs",
                        method: "POST",
                        body: jobData
                    }
                },
                invalidatesTags: ["job"]
            }),
            updateJob: builder.mutation({
                query: jobData => {
                    return {
                        url: "/jobs/" + jobData.id,
                        method: "PATCH",
                        body: jobData
                    }
                },
                invalidatesTags: ["job"]
            }),
            deleteJob: builder.mutation({
                query: id => {
                    return {
                        url: "/jobs/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["job"]
            }),

        }
    }
})

export const {
    useCompanyJobQuery,
    useCreateJobMutation,
    useDeleteJobMutation,
    useUpdateJobMutation
} = companyApi
