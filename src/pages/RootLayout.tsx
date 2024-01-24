import { Outlet } from 'react-router';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <Navigation mode="main" />
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;
