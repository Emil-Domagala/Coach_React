import { useState, useCallback } from 'react';
import { coachesActions } from '../store/slices/coaches';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/slices/user';

const useHTTPCoach = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const registerCoach = useCallback(
    async (
      colectedData: {
        entredName: string;
        entredLastname: string;
        entredPrice: string;
        entredUrl: string;
        entredDesc: string;
        waysValue: {};
        sizeValue: {};
      },
      userData: { userId: string; token: string; userEmail: string },
    ) => {
      const { userId, token, userEmail } = userData;
      const {
        entredName,
        entredLastname,
        entredPrice,
        entredUrl,
        entredDesc,
        waysValue,
        sizeValue,
      } = colectedData;

      const coachData = {
        coachName: entredName,
        coachLastname: entredLastname,
        coachPrice: entredPrice,
        coachUrl: entredUrl,
        coachDesc: entredDesc,
        waysValue,
        sizeValue,
        userEmail,
      };

      try {
        setIsLoading(true);
        const response = await fetch(
          `https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`,
          {
            method: 'PUT',
            body: JSON.stringify(coachData),
          },
        );

        const responseData = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          throw new Error(responseData.error || 'Failed to fetch!');
        }
        dispatch(userActions.setIsCoach(responseData));
        setIsLoading(false);
      } catch (err: any) {
        setIsLoading(false);
        setError(err || 'Something went wrong!');
      }
    },
    [],
  );

 

  return {
    registerCoach: registerCoach,
    isLoading,
    hasError: error,
  };
};

export default useHTTPCoach;
