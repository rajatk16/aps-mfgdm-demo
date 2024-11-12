import { configureStore } from '@reduxjs/toolkit';

import { authApi, devPortalApi, userProfileApi } from './services';
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
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    [devPortalApi.reducerPath]: devPortalApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userProfileApi.middleware, devPortalApi.middleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;
