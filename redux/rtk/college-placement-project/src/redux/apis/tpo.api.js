import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const tpoApi = createApi({
    reducerPath: "tpoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["student", "comapny"],
    endpoints: (builder) => {
        return {
            getStudents: builder.query({
                query: () => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: { role: "student" }
                    }
                },
                providesTags: ["student"]
            }),
            addStudent: builder.mutation({
                query: userData => {
                    return {
                        url: "/users",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["student"]
            }),
            updateStudent: builder.mutation({
                query: userData => {
                    return {
                        url: "/users/" + userData.id,
                        method: "PATCH",
                        body: userData
                    }
                },
                invalidatesTags: ["student"]
            }),
            deletetudent: builder.mutation({
                query: id => {
                    return {
                        url: "/users/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["student"]
            }),

            getCompanies: builder.query({
                query: id => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: { role: "company" }
                    }
                },
                providesTags: ["comapny"]
            }),
            handleCompany: builder.mutation({
                query: companyData => {
                    return {
                        url: "/users/" + companyData.id,
                        method: "PATCH",
                        body: companyData
                    }
                },
                invalidatesTags: ["comapny"]
            }),
            tpoJobs: builder.query({
                query: companyData => {
                    return {
                        url: "/jobs",
                        method: "GET",
                    }
                },
            }),
            tpoApplications: builder.query({
                query: companyData => {
                    return {
                        url: "/applications",
                        method: "GET",
                    }
                },
            }),

        }
    }
})

export const {
    useAddStudentMutation,
    useDeletetudentMutation,
    useGetStudentsQuery,
    useUpdateStudentMutation,
    useGetCompaniesQuery,
    useHandleCompanyMutation,
    useTpoJobsQuery,
    useTpoApplicationsQuery
} = tpoApi
