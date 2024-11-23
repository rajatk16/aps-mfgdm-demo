import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PropertyDefinitionCollection } from '../../gql/graphql';

export interface CollectionsState {
  byId: Record<string, PropertyDefinitionCollection>;
  pagination: {
    cursor: string | null | undefined;
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
    addCollection: (state, action: PayloadAction<PropertyDefinitionCollection>) => {
      state.byId[action.payload.id] = action.payload;
    },
    setCollections: (state, action: PayloadAction<(PropertyDefinitionCollection | null)[]>) => {
      action.payload.forEach((collection) => {
        if (collection !== null) {
          state.byId[collection.id] = collection;
        }
      });
    },
    setPagination: (state, action: PayloadAction<{ cursor: string | null | undefined }>) => {
      state.pagination = {
        cursor: action.payload.cursor
      };
    },
    updateCollection: (state, action: PayloadAction<{ collection: PropertyDefinitionCollection }>) => {
      const { collection } = action.payload;
      state.byId[collection.id] = {
        id: collection.id,
        name: collection.name,
        description: collection.description,
        definitions: collection.definitions
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
