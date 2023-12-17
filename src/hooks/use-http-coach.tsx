import { useState, useCallback } from 'react';
import { coachesActions } from '../store/slices/coaches';
import { useDispatch, useSelector } from 'react-redux';

const useHTTPCoach = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const registerCoach = useCallback(async (
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

    const coachData = {
      ...colectedData,
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
  },[])

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

      

      dispatch(coachesActions.addCoaches(responseData));
    } catch (err) {
      console.log(err);
    }
  },[])

  return { registerCoach: registerCoach, loadCoaches: loadCoaches };
};

export default useHTTPCoach;
