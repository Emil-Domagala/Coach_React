import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';

import ErrorPage from './pages/Error';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import FindCoachPage from './pages/FindCoach';
import AuthPage from './pages/Auth';
import CoachDetailPage, { loadCoach } from './pages/CoachDetail';
import BecomeCoachPage from './pages/BecomeCoach';
import { useDispatch } from 'react-redux';
import { userActions } from './store/slices/user';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'coach', element: <FindCoachPage /> },
      {
        path: 'coach/:id',
        element: <CoachDetailPage />,
        loader: loadCoach,
      },
      { path: 'join', element: <BecomeCoachPage /> },
    ],
  },
  {
    path: 'auth',
    element: <AuthPage />,
  },
]);

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.autoLogin());
  });

  return <RouterProvider router={router} />;
}

export default App;
