import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  token: '',
  // didAutoLogout: false,
  // timeTologout: 0,
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
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');
      state.userId = '';
      state.token = '';
      // state.timeTologout = 0;
    },
    autoLogin(state) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      if (!token || !userId || !tokenExpiration) {
        return;
      }

      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 10000) {
        return;
      }

      state.token = token;
      state.userId = userId;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
