import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  token: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem('token', action.payload.idToken);
      localStorage.setItem('userId', action.payload.localId);
      localStorage.setItem('tokenExpiration', action.payload.expirationDate);
      state.userId = action.payload.localId;
      state.token = action.payload.idToken;
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');
      state.userId = '';
      state.token = '';
      state.isLoggedIn = false;
    },
    autoLogin(state) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      if (!token || !userId || !tokenExpiration) {
        return;
      }

      state.token = token;
      state.userId = userId;
      state.isLoggedIn = true;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
