import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Assuming you have a rootReducer that combines reducers
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    root: rootReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;