// authentication slice

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    isLoggedIn: false
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.userId = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userId = null;
      state.isLoggedIn = false;
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;