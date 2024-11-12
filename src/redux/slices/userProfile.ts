import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserProfile } from '../../types';
import { userProfileApi } from '../services';

const storedUserProfile = localStorage.getItem('profile');

interface UserProfileState {
  profile: UserProfile | null;
}

const initialState: UserProfileState = {
  profile: storedUserProfile ? JSON.parse(storedUserProfile) : null
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    clearUserProfile: (state) => {
      localStorage.removeItem('profile');
      state.profile = null;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userProfileApi.endpoints.getUserProfile.matchFulfilled,
      (state, action: PayloadAction<UserProfile>) => {
        state.profile = action.payload;
        localStorage.setItem('profile', JSON.stringify(action.payload));
      }
    );
  }
});

export const { clearUserProfile } = userProfileSlice.actions;
export const userProfileReducer = userProfileSlice.reducer;
