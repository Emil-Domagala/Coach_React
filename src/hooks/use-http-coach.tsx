import { useState, useCallback } from 'react';
import { coachesActions } from '../store/slices/coaches';
import { useDispatch } from 'react-redux';

const useHTTPCoach = () => {
  // const [isLoading, setIsLoading] = useState(false);
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
        const response = await fetch(
          `https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`,
          {
            method: 'PUT',
            body: JSON.stringify(coachData),
          },
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.error || 'Failed to fetch!');
        }
      } catch (err: any) {
        setError(err.message || 'Something went wrong!');
      }
    },
    [],
  );

  const loadCoaches = useCallback(async () => {
    try {
      const response = await fetch(
        'https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/coaches.json',
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.error || 'Failed to fetch!');
        throw error;
      }

      for (const key in responseData) {
        const coach = {
          coachId: key,
          coachName: responseData[key].coachName,
          coachLastname: responseData[key].coachLastname,
          coachPrice: responseData[key].coachPrice,
          coachUrl: responseData[key].coachUrl,
          coachDesc: responseData[key].coachDesc,
          coachWays: responseData[key].waysValue,
          coachSize: responseData[key].sizeValue,
        };

        dispatch(coachesActions.addCoaches(coach));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { registerCoach: registerCoach, loadCoaches: loadCoaches };
};

export default useHTTPCoach;
