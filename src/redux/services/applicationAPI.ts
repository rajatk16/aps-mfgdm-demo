import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '../store';
import { ApplicationResponse, CollaboratorsResponse } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dynamicBaseQuery: BaseQueryFn<string | { url: string; method: string; body?: any }, unknown, unknown> = async (
  args,
  api,
  extraOptions
) => {
  const state = api.getState() as RootState;
  const baseUrl = state.credentials.BASE_URL;

  if (!baseUrl) {
    throw new Error('BASE_URL is not defined in the credentials state.');
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

export const applicationApi = createApi({
  reducerPath: 'applicationAPI',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getApplication: builder.query<ApplicationResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/applications/v1/clients/${id}`,
        method: 'GET'
      })
    }),
    getCollaborators: builder.query<CollaboratorsResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/applications/v1/clients/${id}/collaborators`,
        method: 'GET'
      })
    })
  })
});

export const { useLazyGetApplicationQuery: useGetApplication, useLazyGetCollaboratorsQuery: useGetCollaborators } =
  applicationApi;
