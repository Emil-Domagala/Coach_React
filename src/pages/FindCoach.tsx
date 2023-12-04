import Filter from '../components/FindCoach/Filter';
import LogoBar from '../components/FindCoach/LogoBar';
import { useEffect, useState } from 'react';

const HireCoachPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);
  return (
    <>
      {windowWidth < 768 && <LogoBar />}
      <Filter />
      <h1>Hire ME!</h1>pppp
    </>
  );
};
export default HireCoachPage;
