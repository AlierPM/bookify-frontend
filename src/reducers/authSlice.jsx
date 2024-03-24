// authentication slice

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    isLoggedIn: false,
    isError: false
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.userId = action.payload;
      state.isLoggedIn = true;
    },
    loginFailure: (state, action) => {
      const loginErrors = action.payload;
      state.isLoggedIn = false;
      state.userId = null;
      if (loginErrors && loginErrors.length > 0) {
        state.isLoggedIn = false;
        state.isError = true;
      }
    },
    logout: (state) => {
      state.userId = null;
      state.isLoggedIn = false;
    }
  }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;