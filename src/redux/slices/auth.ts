import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi } from '../services';
import { TokenResponse } from '../../types';

interface AuthState {
  threeLOToken: TokenResponse;
  twoLOToken: Omit<TokenResponse, 'refresh_token'>;
}

const storedToken = localStorage.getItem('threeLOToken');

const initialState: AuthState = {
  threeLOToken: storedToken
    ? JSON.parse(storedToken)
    : {
        access_token: undefined,
        expires_in: undefined,
        token_type: undefined,
        refresh_token: undefined
      },
  twoLOToken: {
    access_token: undefined,
    expires_in: undefined,
    token_type: undefined
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearThreeLOToken: (state) => {
      localStorage.removeItem('threeLOToken');
      state.threeLOToken = {
        access_token: undefined,
        expires_in: undefined,
        token_type: undefined,
        refresh_token: undefined
      };
    },
    clearTwoLOToken: (state) => {
      state.twoLOToken = {
        access_token: undefined,
        expires_in: undefined,
        token_type: undefined
      };
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.getToken.matchFulfilled, (state, action: PayloadAction<TokenResponse>) => {
      state.threeLOToken.access_token = action.payload.access_token;
      state.threeLOToken.token_type = action.payload.token_type;
      state.threeLOToken.refresh_token = action.payload.refresh_token;

      if (action.payload.expires_in) {
        state.threeLOToken.expires_in = Date.now() + action.payload.expires_in * 1000;
      }

      localStorage.setItem('threeLOToken', JSON.stringify(state.threeLOToken));
    });

    builder.addMatcher(
      authApi.endpoints.getRefreshToken.matchFulfilled,
      (state, action: PayloadAction<TokenResponse>) => {
        state.threeLOToken.access_token = action.payload.access_token;
        state.threeLOToken.token_type = action.payload.token_type;
        state.threeLOToken.refresh_token = action.payload.refresh_token;

        if (action.payload.expires_in) {
          state.threeLOToken.expires_in = Date.now() + action.payload.expires_in * 1000;
        }

        localStorage.setItem('threeLOToken', JSON.stringify(state.threeLOToken));
      }
    );
    builder.addMatcher(
      authApi.endpoints.getTwoLOToken.matchFulfilled,
      (state, action: PayloadAction<TokenResponse>) => {
        state.twoLOToken.access_token = action.payload.access_token;
        if (action.payload.expires_in) {
          state.threeLOToken.expires_in = Date.now() + action.payload.expires_in * 1000;
        }
        state.twoLOToken.token_type = action.payload.token_type;
      }
    );
  }
});

export const authReducer = authSlice.reducer;
export const { clearThreeLOToken, clearTwoLOToken } = authSlice.actions;
