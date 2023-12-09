import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';

import ErrorPage from './pages/Error';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import FindCoachPage from './pages/FindCoach';
import AuthPage from './pages/Auth';
import CoachPage from './pages/Coach';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/coach', element: <FindCoachPage />},
      {path:'/coach/:id',element:<CoachPage/>}
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
