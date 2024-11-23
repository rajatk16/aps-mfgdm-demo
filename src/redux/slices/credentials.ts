import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CredentialsState {
  clientId?: string;
  clientSecret?: string;
  APS_URL?: string;
  BASE_URL?: string;
  ACCOUNTS_URL?: string;
  APS_CALLBACK_URL?: string;
  USERPROFILE_URL?: string;
  GRAPHQL_URL?: string;
  PARAMETER_SERVICE_URL?: string;
  BASE_CLIENT_ID?: string;
  BASE_ACCOUNT_ID?: string;
  BASE_GROUP_ID?: string;
}

function getEnvGroup(keyword: 'DEV' | 'STAGING' | 'PRODUCTION'): Omit<CredentialsState, 'clientId' | 'clientSecret'> {
  const prefix = `ADSK_${keyword}_`;

  return {
    APS_URL: import.meta.env[`${prefix}APS_URL`],
    BASE_URL: import.meta.env[`${prefix}BASE_URL`],
    ACCOUNTS_URL: import.meta.env[`${prefix}ACCOUNTS_URL`],
    APS_CALLBACK_URL: import.meta.env[`${prefix}APS_CALLBACK_URL`],
    USERPROFILE_URL: import.meta.env[`${prefix}USERPROFILE_URL`],
    GRAPHQL_URL: import.meta.env[`${prefix}GRAPHQL_URL`],
    PARAMETER_SERVICE_URL: import.meta.env[`${prefix}PARAMETER_SERVICE_URL`],
    BASE_CLIENT_ID: import.meta.env[`${prefix}BASE_CLIENT_ID`],
    BASE_ACCOUNT_ID: import.meta.env[`${prefix}BASE_ACCOUNT_ID`],
    BASE_GROUP_ID: import.meta.env[`${prefix}BASE_GROUP_ID`]
  };
}

const initialState = {
  ACCOUNTS_URL: localStorage.getItem('ACCOUNTS_URL') ?? undefined,
  APS_CALLBACK_URL: localStorage.getItem('APS_CALLBACK_URL') ?? undefined,
  APS_URL: localStorage.getItem('APS_URL') ?? undefined,
  BASE_ACCOUNT_ID: localStorage.getItem('BASE_ACCOUNT_ID') ?? undefined,
  BASE_CLIENT_ID: localStorage.getItem('BASE_CLIENT_ID') ?? undefined,
  BASE_GROUP_ID: localStorage.getItem('BASE_GROUP_ID') ?? undefined,
  BASE_URL: localStorage.getItem('BASE_URL') ?? undefined,
  GRAPHQL_URL: localStorage.getItem('GRAPHQL_URL') ?? undefined,
  PARAMETER_SERVICE_URL: localStorage.getItem('PARAMETER_SERVER_URL') ?? undefined,
  USERPROFILE_URL: localStorage.getItem('USER_PROFILE_URL') ?? undefined,
  clientId: localStorage.getItem('clientId') ?? undefined,
  clientSecret: localStorage.getItem('clientSecret') ?? undefined
} satisfies CredentialsState as CredentialsState;

export const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        clientId: string;
        clientSecret: string;
        env: 'DEV' | 'STAGING' | 'PRODUCTION';
        hasValidCredentials: boolean;
      }>
    ) => {
      const env = getEnvGroup(action.payload.env);
      state.ACCOUNTS_URL = env.ACCOUNTS_URL;
      state.APS_CALLBACK_URL = env.APS_CALLBACK_URL;
      state.APS_URL = env.APS_URL;
      state.BASE_ACCOUNT_ID = env.BASE_ACCOUNT_ID;
      state.BASE_CLIENT_ID = env.BASE_ACCOUNT_ID;
      state.BASE_GROUP_ID = env.BASE_GROUP_ID;
      state.BASE_URL = env.BASE_URL;
      state.GRAPHQL_URL = env.GRAPHQL_URL;
      state.PARAMETER_SERVICE_URL = env.PARAMETER_SERVICE_URL;
      state.USERPROFILE_URL = env.USERPROFILE_URL;
      state.clientId = action.payload.clientId;
      state.clientSecret = action.payload.clientSecret;
      localStorage.setItem('ACCOUNTS_URL', env.ACCOUNTS_URL ?? '');
      localStorage.setItem('APS_CALLBACK_URL', env.APS_CALLBACK_URL ?? '');
      localStorage.setItem('APS_URL', env.APS_URL ?? '');
      localStorage.setItem('BASE_ACCOUNT_ID', env.BASE_ACCOUNT_ID ?? '');
      localStorage.setItem('BASE_CLIENT_ID', env.BASE_CLIENT_ID ?? '');
      localStorage.setItem('BASE_GROUP_ID', env.BASE_GROUP_ID ?? '');
      localStorage.setItem('BASE_URL', env.BASE_URL ?? '');
      localStorage.setItem('GRAPHQL_URL', env.GRAPHQL_URL ?? '');
      localStorage.setItem('PARAMETER_SERVER_URL', env.PARAMETER_SERVICE_URL ?? '');
      localStorage.setItem('USER_PROFILE_URL', env.USERPROFILE_URL ?? '');
      localStorage.setItem('clientId', action.payload.clientId);
      localStorage.setItem('clientSecret', action.payload.clientSecret);
    },
    clearCredentials: (state) => {
      localStorage.clear();
      state = {
        clientId: undefined,
        clientSecret: undefined,
        APS_URL: undefined,
        BASE_URL: undefined,
        ACCOUNTS_URL: undefined,
        APS_CALLBACK_URL: undefined,
        USERPROFILE_URL: undefined,
        GRAPHQL_URL: undefined,
        PARAMETER_SERVICE_URL: undefined,
        BASE_CLIENT_ID: undefined,
        BASE_ACCOUNT_ID: undefined,
        BASE_GROUP_ID: undefined
      };
      console.info(`Credentials Cleared! clientId: ${state.clientId}`);
    }
  }
});

export const { setCredentials, clearCredentials } = credentialsSlice.actions;

export const credentialsReducer = credentialsSlice.reducer;
