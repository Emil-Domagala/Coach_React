import { useState, useCallback } from 'react';
import { userActions } from '../store/slices/user';
import { useDispatch } from 'react-redux';

const useAuth = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const authHandler = useCallback(
    async (mode: string, userEmail: string, userPassword: string) => {
      let URL =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
      const API_KEY = 'AIzaSyDdoiMPQNY-af7SLM5Shnii9GRzpL5Ymks';

      if (mode === 'LOGIN') {
        URL =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
      }

      try {
        const response = await fetch(URL + API_KEY, {
          method: 'POST',
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            returnSecureToken: true,
          }),
        });

        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();

        const expiresIn = +data.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        const userData = {
          idToken: data.idToken,
          localId: data.localId,
          expirationDate: expirationDate,
          userEmail:userEmail
        };
        dispatch(userActions.login(userData));
      } catch (err: any) {
        setError(err.message || 'Something went wrong!');
      }
    },
    [],
  );

  return { authHandler: authHandler };
};

export default useAuth;
