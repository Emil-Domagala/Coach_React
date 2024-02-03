import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';

import ErrorPage from './pages/Error';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import FindCoachPage from './pages/FindCoach';
import AuthPage, { checkAuthLoader } from './pages/Auth';
import CoachDetailPage, { loadCoach } from './pages/CoachDetail';
import BecomeCoachPage, { checkBecomeCoachLoader } from './pages/BecomeCoach';
import MessagesPage, { loaderMessages } from './pages/Messages';
import { useDispatch } from 'react-redux';
import { userActions } from './store/slices/user';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/coach', element: <FindCoachPage /> },
      {
        path: '/coach/:id',
        element: <CoachDetailPage />,
        loader: loadCoach,
      },
      {
        path: '/join',
        element: <BecomeCoachPage />,
        loader: checkBecomeCoachLoader,
      },
      { path: '/messages', element: <MessagesPage />, loader: loaderMessages },
    ],
  },
  { path: '*', element: <ErrorPage /> },
  { path: '/error', element: <ErrorPage /> },
  {
    path: 'auth',
    element: <AuthPage />,
    loader: checkAuthLoader,
  },
]);

function App() {
  const tokenExpiration = localStorage.getItem('tokenExpiration');
  const currentDate = new Date().getTime();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.autoLogin());
  });

  useEffect(() => {
    if (!tokenExpiration) {
      return;
    }

    const timeLeft = +tokenExpiration - currentDate;

    if (timeLeft <= 0) {
      dispatch(userActions.logout());
    }

    setTimeout(() => {
      dispatch(userActions.logout());
    }, timeLeft);
  }, [tokenExpiration]);

  return <RouterProvider router={router} />;
}

export default App;
