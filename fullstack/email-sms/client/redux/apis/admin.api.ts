import { APP_URL } from "@/constants/config"
import { SETTING, SETTING_RESPONSE } from "@/types/Admin"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${APP_URL}/api/admin`,
        credentials: "include"
    }),
    tagTypes: ["setting"],
    endpoints: (builder) => {
        return {
            getSettings: builder.query<SETTING_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/setting",
                        method: "GET"
                    }
                },
                providesTags: ["setting"]
            }),
            updateSetting: builder.mutation<void, SETTING>({
                query: settingData => {
                    return {
                        url: "/setting/" + settingData._id,
                        method: "PUT",
                        body: settingData
                    }
                },
                invalidatesTags: ["setting"]
            }),

        }
    }
})

export const { useGetSettingsQuery, useUpdateSettingMutation } = adminApi
