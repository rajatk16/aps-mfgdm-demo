import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
import { ApplicationResponse, CollaboratorsResponse } from '../../types';

export const applicationApi = createApi({
  reducerPath: 'applicationAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.ADSK_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { access_token } = (getState() as RootState).auth.threeLOToken;
      if (access_token) {
        headers.set('Authorization', `Bearer ${access_token}`);
      }
      return headers;
    }
  }),
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
