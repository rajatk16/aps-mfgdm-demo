import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '../store';
import { TokenResponse } from '../../types';

const createAuthHeader = (clientId: string, clientSecret: string) => {
  const credentials = `${clientId}:${clientSecret}`;
  return `Basic ${btoa(credentials)}`;
};

const dynamicBaseQuery: BaseQueryFn<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  string | { url: string; method: string; headers?: Record<string, string>; body?: any },
  unknown,
  unknown
> = async (args, api, extraOptions) => {
  const state = api.getState() as RootState;
  const baseUrl = state.credentials.BASE_URL;

  if (!baseUrl) {
    throw new Error(`BASE_URL is not defined in the credentials state.`);
  }

  const rawBaseQuery = fetchBaseQuery({
    baseUrl
  });

  return rawBaseQuery(args, api, extraOptions);
};

export const authApi = createApi({
  reducerPath: 'authAPI',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getToken: builder.mutation<
      TokenResponse,
      { code: string; clientId: string; clientSecret: string; redirectUri: string }
    >({
      query: ({ code, clientId, clientSecret, redirectUri }) => ({
        url: '/authentication/v2/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: createAuthHeader(clientId, clientSecret)
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUri
        })
      })
    }),
    getRefreshToken: builder.mutation<TokenResponse, { clientId: string; clientSecret: string; refresh_token: string }>(
      {
        query: ({ clientId, clientSecret, refresh_token }) => ({
          url: '/authentication/v2/token',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            Authorization: createAuthHeader(clientId, clientSecret)
          },
          body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
            scope: 'data:read data:write data:create data:search application:client:read'
          })
        })
      }
    ),
    getTwoLOToken: builder.mutation<TokenResponse, { clientId: string; clientSecret: string }>({
      query: ({ clientId, clientSecret }) => ({
        url: '/authentication/v2/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: createAuthHeader(clientId, clientSecret)
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          scope: 'data:read data:write data:create data:search application:client:read'
        })
      })
    })
  })
});

export const {
  useGetTokenMutation: useGetToken,
  useGetRefreshTokenMutation: useGetRefreshToken,
  useGetTwoLOTokenMutation: useGetTwoLOToken
} = authApi;
