import classes from './Navigation.module.scss';
import NavButton from './Mobile/NavButton';
import NavSlider from './Mobile/NavSlider';
import NavBar from './Deskop/NavBar';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const barActiveHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      {windowWidth < 768 ? (
        <>
          <NavButton isActive={isActive} onClick={barActiveHandler} />
          <NavSlider isActive={isActive} />
        </>
      ) : (
        <NavBar />
      )}
    </nav>
  );
};
export default Navigation;
