import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user'
import coachesRrducer from './slices/coaches'

const store = configureStore({
  reducer: {user:userReducer, coaches:coachesRrducer},
});

export default store;
