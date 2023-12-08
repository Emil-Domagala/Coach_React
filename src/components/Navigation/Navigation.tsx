import NavButton from './Mobile/NavButton';
import NavSlider from './Mobile/NavSlider';
import NavBar from './Deskop/NavBar';
import NavigationTwo from './NavTwo/NavigationTwo';
import { useState, useEffect } from 'react';
import SmallNav from './SmallNav/SmallNav';

const Navigation = (props: { mode: 'main' | 'two' | 'small' }) => {
  const { mode } = props;
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
      {mode !== 'small' && windowWidth < 768 && (
        <>
          <NavButton isActive={isActive} onClick={barActiveHandler} />
          <NavSlider isActive={isActive} />
        </>
      )}
      {windowWidth < 768 && mode === 'two' && (
        <>
          <NavigationTwo />
        </>
      )}
      {mode !== 'small' && windowWidth >= 768 && <NavBar />}
      {mode === 'small' && <SmallNav />}
    </nav>
  );
};
export default Navigation;
