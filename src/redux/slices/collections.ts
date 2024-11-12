import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Collection } from '../../types';

export interface CollectionsState {
  byId: Record<string, Collection>;
  pagination: {
    cursor: string | null;
  };
}

const initialState = {
  byId: {},
  pagination: {
    cursor: null
  }
} satisfies CollectionsState as CollectionsState;

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    addCollection: (state, action: PayloadAction<Collection>) => {
      state.byId[action.payload.id] = action.payload;
    },
    setCollections: (state, action: PayloadAction<Collection[]>) => {
      action.payload.forEach((collection) => {
        state.byId[collection.id] = collection;
      });
    },
    setPagination: (state, action: PayloadAction<{ cursor: string }>) => {
      state.pagination = {
        cursor: action.payload.cursor
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateCollection: (state, action: PayloadAction<{ collection: any }>) => {
      const { collection } = action.payload;
      state.byId[collection.id] = {
        id: collection.id,
        name: collection.name,
        description: collection.description,
        definitions: collection.definitions?.results
      };
    },
    clearCollections: (state) => {
      state.byId = {};
      state.pagination = {
        cursor: null
      };
    }
  }
});

export const collectionsReducer = collectionsSlice.reducer;
export const { addCollection, clearCollections, setCollections, updateCollection, setPagination } =
  collectionsSlice.actions;
