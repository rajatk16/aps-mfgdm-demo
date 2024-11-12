import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";
import { UserProfile } from "../../types";

export const userProfileApi = createApi({
  reducerPath: 'userProfileAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_USERPROFILE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { access_token } = (getState() as RootState).auth.threeLOToken;
      if (access_token) {
        headers.set('Authorization', `Bearer ${access_token}`)
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfile, void>({
      query: () => ({
        url: '/userinfo',
        method: 'GET'
      })
    })
  })
})

export const {useLazyGetUserProfileQuery: useGetUserProfile} = userProfileApi;