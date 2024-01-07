import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useHTTPmessage = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const sendMessage = useCallback(
    async (colectedData: {
      entredName: string;
      entredPhone: string;
      entredMessage: string;
      entredEmail: string;
      userId: string | undefined;
    }) => {
      const messageId = new Date().getTime();

      const messageData = {
        senderName: colectedData.entredName,
        senderPhone: colectedData.entredPhone,
        message: colectedData.entredMessage,
        senderEmail: colectedData.entredEmail,
        reciverId: colectedData.userId,
        messageId: messageId,
      };

      try {
        const response = await fetch(
          `https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/messages/${colectedData.userId}/${messageId}.json`,
          {
            method: 'PUT',
            body: JSON.stringify(messageData),
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
  return { sendMessage: sendMessage };
};

export default useHTTPmessage;
