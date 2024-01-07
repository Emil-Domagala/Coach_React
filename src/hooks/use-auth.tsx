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

        const userData = {
          idToken: data.idToken,
          localId: data.localId,
          userEmail: userEmail,
        };
        dispatch(userActions.login(userData));
        await checkIfIsCoach(data.localId);
      } catch (err: any) {
        setError(err.message || 'Something went wrong!');
      }
    },
    [],
  );
  const checkIfIsCoach = useCallback(async (userId: string) => {
    try {
      const response = await fetch(
        `https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      );
      const responseData = await response.json();

      
      if (!response.ok) {
        const error = new Error(responseData.error || 'Failed to fetch!');
        throw error;
      }
      dispatch(userActions.setIsCoach(responseData));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { authHandler: authHandler };
};

export default useAuth;
