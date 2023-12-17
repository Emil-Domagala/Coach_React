import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  token: '',
  userEmail:'',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem('token', action.payload.idToken);
      localStorage.setItem('userId', action.payload.localId);
      localStorage.setItem('userEmail', action.payload.userEmail);
      localStorage.setItem('tokenExpiration', action.payload.expirationDate);
      state.userId = action.payload.localId;
      state.token = action.payload.idToken;
      state.userEmail = action.payload.userEmail;
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');
      localStorage.removeItem('userEmail');
      state.userId = '';
      state.token = '';
      state.userEmail = '';
      state.isLoggedIn = false;
    },
    autoLogin(state) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const userEmail = localStorage.getItem('userEmail');
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      if (!token || !userId || !tokenExpiration || !userEmail) {
        return;
      }

      state.userId = userId;
      state.token = token;
      state.userEmail = userEmail;
      state.isLoggedIn = true;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
