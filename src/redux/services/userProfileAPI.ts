import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
import { UserProfile } from '../../types';

const dynamicBaseQuery: BaseQueryFn<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  string | { url: string; method: string; headers?: Record<string, string>; body?: any },
  unknown,
  unknown
> = async (args, api, extraOptions) => {
  const state = api.getState() as RootState;
  const baseUrl = state.credentials.USERPROFILE_URL;

  if (!baseUrl) {
    throw new Error('USERPROFILE_URL is not defined in the credentials state.');
  }

  const rawBaseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const { access_token } = state.auth.threeLOToken;
      if (access_token) {
        headers.set('Authorization', `Bearer ${access_token}`);
      }
      return headers;
    }
  });

  return rawBaseQuery(args, api, extraOptions);
};

export const userProfileApi = createApi({
  reducerPath: 'userProfileAPI',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfile, void>({
      query: () => ({
        url: '/userinfo',
        method: 'GET'
      })
    })
  })
});

export const { useLazyGetUserProfileQuery: useGetUserProfile } = userProfileApi;
