import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

// Auth
export const selectTwoLOAuth = (state: RootState) => state.auth.twoLOToken;
export const selectThreeLOAuth = (state: RootState) => state.auth.threeLOToken;

// Base Collections
const selectBaseCollectionsById = (state: RootState) => state.baseCollections.byId;
const selectBaseCollections = (state: RootState) => state.baseCollections.byId;

export const selectBaseCollectionById = (id: string) =>
  createSelector([selectBaseCollectionsById], (byId) => byId[id] || null);
export const selectBaseCollectionsAsArray = createSelector([selectBaseCollections], (collections) =>
  Object.values(collections)
);

// Collections
const selectCollectionsById = (state: RootState) => state.collections.byId;
const selectCollections = (state: RootState) => state.collections.byId;

export const selectCollectionById = (id: string) => createSelector([selectCollectionsById], (byId) => byId[id] || null);
export const selectPagination = (state: RootState) => state.collections.pagination;
export const selectCursor = createSelector([selectPagination], (pagination) => pagination.cursor);
export const selectCollectionsAsArray = createSelector([selectCollections], (collections) =>
  Object.values(collections)
);

// Credentials
const selectCredentials = (state: RootState) => state.credentials;

export const selectClientId = createSelector([selectCredentials], (crendentials) => crendentials.clientId);
export const selectClientSecret = createSelector([selectCredentials], (credentials) => credentials.clientSecret);
export const selectHasValidCredentials = createSelector(
  [selectClientId, selectClientSecret],
  (clientId, clientSecret) => Boolean(clientId && clientSecret)
);

// Userprofile
const selectUserProfile = (state: RootState) => state.userProfile;

export const selectProfile = createSelector([selectUserProfile], (userProfile) => userProfile.profile);
