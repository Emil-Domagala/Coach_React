import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import MessagesWrapper from '../components/Messages/MessagesWrapper';
import { Await, defer, redirect, useLoaderData, json } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingModal from '../components/UI/LoadingModal';
import ErrorModal from '../components/UI/ErrorModal';

const MessagesPage = () => {
  const body = document.querySelector('body');
  body!.setAttribute('class', 'bgc-two');

  const { loadedMessages }: any = useLoaderData();

  return (
    <>
      <Navigation mode="two" />
      <Suspense fallback={<LoadingModal />}>
        <Await resolve={loadedMessages} errorElement={<ErrorModal />}>
          {(loadMessages) => <MessagesWrapper loadMessages={loadMessages} />}
        </Await>
      </Suspense>
      <article />
      <Footer />
    </>
  );
};
export default MessagesPage;

const loadMessages = async () => {
  const id = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const response = await fetch(
    ` https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/messages/${id}.json?auth=${token}`,
  );
  if (!response.ok) {
    throw json({ message: 'Could not fetch messages.' });
  } else {
    const responseData = await response.json();
    return responseData;
  }
};

export function loaderMessages() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const isCoach = localStorage.getItem('isCoach');

  if (isLoggedIn === 'true' && isCoach === 'true') {
    return defer({
      loadedMessages: loadMessages(),
    });
  } else {
    return redirect('/');
  }
}
