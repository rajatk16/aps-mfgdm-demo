import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
import { ApplicationResponse, AppMembershipResponse, AppUserResponse } from '../../types';

export const devPortalApi = createApi({
  reducerPath: 'devPortalAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { access_token } = (getState() as RootState).auth.twoLOToken;
      if (access_token) {
        headers.set('Authorization', `Bearer ${access_token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getApp: builder.query<ApplicationResponse, { clientId: string }>({
      query: ({ clientId }) => ({
        url: '/forgepor-api/v1/developer_app',
        method: 'GET',
        params: {
          consumer_key: clientId
        }
      })
    }),
    getUser: builder.query<AppUserResponse, { clientId: string }>({
      query: ({ clientId }) => ({
        url: '/forpor-api/v1/user',
        method: 'GET',
        params: { client_id: clientId }
      })
    }),
    getMembership: builder.query<AppMembershipResponse, { appId: string }>({
      query: ({ appId }) => ({
        url: `/forgepor-api/v1/developer_app/${appId}/membership`,
        method: 'GET'
      })
    })
  })
});

export const {
  useLazyGetAppQuery: useGetApp,
  useLazyGetMembershipQuery: useGetMembership,
  useLazyGetUserQuery: useGetUser
} = devPortalApi;
