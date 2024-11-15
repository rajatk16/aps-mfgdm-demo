import { configureStore } from '@reduxjs/toolkit';

import { applicationApi, authApi, userProfileApi } from './services';
import {
  authReducer,
  collectionsReducer,
  credentialsReducer,
  userProfileReducer,
  baseCollectionsReducer
} from './slices';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    collections: collectionsReducer,
    credentials: credentialsReducer,
    userProfile: userProfileReducer,
    baseCollections: baseCollectionsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userProfileApi.middleware, applicationApi.middleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;
