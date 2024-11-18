import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropertyDefCollection, PropertyDefinition } from '@adsk/pim-propertydef-manager';

export interface PropertyDefCollectionWithDefinitions extends PropertyDefCollection {
  definitions?: PropertyDefinition[];
}

interface BaseCollectionsState {
  byId: Record<string, PropertyDefCollectionWithDefinitions>;
}

const initialState: BaseCollectionsState = {
  byId: {}
};

export const baseCollectionsSlice = createSlice({
  name: 'baseCollections',
  initialState,
  reducers: {
    addBaseCollection: (state, action: PayloadAction<PropertyDefCollection>) => {
      state.byId[action.payload.id] = action.payload;
    },
    setBaseCollections: (state, action: PayloadAction<PropertyDefCollection[]>) => {
      const collections = action.payload;
      collections.forEach((collection) => {
        state.byId[collection.id] = {
          id: collection.id,
          title: collection.title,
          description: collection.description,
          createdAt: collection.createdAt,
          createdBy: collection.createdBy
        };
      });
    },
    setBasePropertyDefinitions: (
      state,
      action: PayloadAction<{ definitions: PropertyDefinition[]; collectionId: string }>
    ) => {
      const { collectionId, definitions } = action.payload;
      const collection = state.byId[collectionId];
      if (collection) {
        const existingDefinitions = collection.definitions ?? [];

        const mergedDefinitions = [
          ...existingDefinitions,
          ...definitions.filter((newDef) => !existingDefinitions.some((existingDef) => existingDef.id === newDef.id))
        ];
        collection.definitions = mergedDefinitions;
        state.byId[collectionId] = collection;
      } else {
        state.byId[collectionId] = {
          id: collectionId,
          title: atob(collectionId),
          definitions: definitions,
          createdAt: '',
          createdBy: ''
        };
      }
    },
    clearBaseCollections: (state) => {
      state.byId = {};
    }
  }
});

export const baseCollectionsReducer = baseCollectionsSlice.reducer;
export const { addBaseCollection, clearBaseCollections, setBaseCollections, setBasePropertyDefinitions } =
  baseCollectionsSlice.actions;
