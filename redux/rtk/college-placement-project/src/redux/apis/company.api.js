import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const companyApi = createApi({
    reducerPath: "companyApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["job"],
    endpoints: (builder) => {
        return {
            companyJob: builder.query({
                query: (cid) => {
                    return {
                        url: "/jobs",
                        method: "GET",
                        params: { company: cid }
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

            getCompanyApplication: builder.query({
                query: id => {
                    return {
                        url: "/applications",
                        method: "GET",
                    }
                },
                providesTags: []
            }),

            getCompanyStudents: builder.query({
                query: id => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: { role: "student" }
                    }
                },
                providesTags: []
            }),

            updateApplication: builder.mutation({
                query: applicationData => {
                    return {
                        url: "/applications/" + applicationData.id,
                        method: "PATCH",
                        body: applicationData
                    }
                },
                providesTags: []
            }),

        }
    }
})

export const {
    useCompanyJobQuery,
    useCreateJobMutation,
    useDeleteJobMutation,
    useUpdateJobMutation,
    useGetCompanyApplicationQuery,
    useGetCompanyStudentsQuery,
    useUpdateApplicationMutation
} = companyApi
