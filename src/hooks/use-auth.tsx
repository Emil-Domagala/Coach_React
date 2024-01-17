import { useState, useCallback } from 'react';
import { userActions } from '../store/slices/user';
import { useDispatch } from 'react-redux';
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const login = useCallback(async (userEmail: string, userPassword: string) => {
    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdoiMPQNY-af7SLM5Shnii9GRzpL5Ymks',
        {
          method: 'POST',
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            returnSecureToken: true,
          }),
        },
      );
      if (!response.ok) {
        throw json({ message: 'Could not login.' });
      }
      const data = await response.json();
      const userData = {
        idToken: data.idToken,
        localId: data.localId,
        userEmail: userEmail,
      };
      const expiresIn = +data.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;
      const expirationDateString = expirationDate.toString()
      localStorage.setItem('tokenExpiration', expirationDateString);

      checkIfIsCoach(data.localId);
      dispatch(userActions.login(userData));
      navigate('/');
    } catch (err: any) {
      setError(
        err.message || 'Failed to login. Please check your email and password!',
      );
    }
  }, []);

  const signup = useCallback(
    async (userEmail: string, userPassword: string) => {
      try {
        const response = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdoiMPQNY-af7SLM5Shnii9GRzpL5Ymks',
          {
            method: 'POST',
            body: JSON.stringify({
              email: userEmail,
              password: userPassword,
              returnSecureToken: true,
            }),
          },
        );

        if (!response.ok) {
          throw json({ message: 'Could not register.' });
        }

        login(userEmail, userPassword);
      } catch (err: any) {
        setError(
          err.message ||
            'Failed to create account. This email is already in use',
        );
      }
    },
    [],
  );

  const checkIfIsCoach = useCallback(async (userId: string) => {
    const response = await fetch(
      `https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
    );
    if (!response.ok) {
      throw json({ message: 'Could not fetch coaches.' });
    } else {
      const responseData = await response.json();
      dispatch(userActions.setIsCoach(responseData));
    }
  }, []);

  return { signup: signup, login: login, error };
};

export default useAuth;
