import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  token: '',
  userEmail: '',
  isLoggedIn: false,
  isCoach: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem('token', action.payload.idToken);
      localStorage.setItem('userId', action.payload.localId);
      localStorage.setItem('userEmail', action.payload.userEmail);
      localStorage.setItem('isLoggedIn', 'true');
      state.userId = action.payload.localId;
      state.token = action.payload.idToken;
      state.userEmail = action.payload.userEmail;
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('isCoach');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('tokenExpiration');
      state.userId = '';
      state.token = '';
      state.userEmail = '';
      state.isLoggedIn = false;
      state.isCoach=false
    },
    autoLogin(state) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const userEmail = localStorage.getItem('userEmail');
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const isCoach = localStorage.getItem('isCoach');
      let setIsLoggedIn=false
      let setIsCoach=false

      if (!token || !userId || !userEmail) {
        return;
      }

      if(isLoggedIn==='true'){
        setIsLoggedIn = true;
      }
      if(isCoach==='true'){
        setIsCoach = true;
      }

      state.userId = userId;
      state.token = token;
      state.userEmail = userEmail;
      state.isLoggedIn = setIsLoggedIn;
      state.isCoach = setIsCoach;

    },
    setIsCoach(state, action) {
      if (action.payload !== null) {
        state.isCoach = true;
        localStorage.setItem('isCoach', 'true');
      } else {
        localStorage.setItem('isCoach', 'false');
        state.isCoach = false;
      }
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
