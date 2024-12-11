import { redirect } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import Navigation from '../components/Navigation/Navigation';

const AuthPage = () => {
  const body = document.querySelector('body');
  body!.setAttribute('class', 'bgc-two');
  return (
    <>
      <Navigation mode="small" />
      <Auth />
    </>
  );
};

export default AuthPage;

export function checkAuthLoader() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
    return redirect('/');
  }
  return '';
}
