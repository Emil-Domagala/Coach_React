import { Outlet } from 'react-router';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Home/Footer/Footer';

const RootLayout = () => {

  return (
    <>
    <Navigation/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default RootLayout;
