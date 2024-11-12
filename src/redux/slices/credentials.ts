import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CredentialsState {
  clientId?: string;
  clientSecret?: string;
}

const initialState = {
  clientId: localStorage.getItem('clientId') ?? undefined,
  clientSecret: localStorage.getItem('clientSecret') ?? undefined
} satisfies CredentialsState as CredentialsState;

export const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ clientId: string; clientSecret: string; hasValidCredentials: boolean }>
    ) => {
      state.clientId = action.payload.clientId;
      state.clientSecret = action.payload.clientSecret;

      localStorage.setItem('clientId', action.payload.clientId);
      localStorage.setItem('clientSecret', action.payload.clientSecret);
    },
    clearCredentials: (state) => {
      localStorage.removeItem('clientId');
      localStorage.removeItem('clientSecret');
      state = {
        clientId: undefined,
        clientSecret: undefined
      };
      console.log(`Credentials Cleared! clientId: ${state.clientId}`);
    }
  }
});

export const { setCredentials, clearCredentials } = credentialsSlice.actions;

export const credentialsReducer = credentialsSlice.reducer;
