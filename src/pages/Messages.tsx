import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import MessagesWrapper from '../components/Messages/MessagesWrapper';
import { redirect, useLoaderData } from 'react-router-dom';

const MessagesPage = () => {
  const body = document.querySelector('body');
  body!.setAttribute('class', 'bgc-two');

  const loadMessages = useLoaderData();

  return (
    <>
      <Navigation mode="two" />
      <MessagesWrapper loadMessages={loadMessages} />
      <article />
      <Footer />
    </>
  );
};
export default MessagesPage;

export const loadMessages = async () => {
  const id = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const isCoach = localStorage.getItem('isCoach');

  if (isLoggedIn === 'true' && isCoach === 'true') {
    try {
      const response = await fetch(
        ` https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/messages/${id}.json?auth=${token}`,
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.error || 'Failed to fetch!');
        throw error;
      }

      return responseData;
    } catch (err) {
      console.log(err);
    }
  }else{
    return redirect('/')
  }
};
