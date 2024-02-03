import { useState, useEffect } from 'react';
import './ToggleMode.scss';

const DarkMode = () => {
  const [isChecked, setIsChecked] = useState(false);
  const body = document.querySelector('body');

  const setDarkMode = () => {
    body!.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
  };
  const setLightMode = () => {
    body!.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
  };

  useEffect(() => {
    const dataTheme = localStorage.getItem('data-theme');
    if (dataTheme === 'dark') {
      setIsChecked(true);
      setDarkMode();
    } else {
      setIsChecked(false);
      setLightMode();
    }
  }, []);

  const toogleTheme = () => {
    if (body!.getAttribute('data-theme') === 'light') {
      setIsChecked(true);
      setDarkMode();
    } else {
      setIsChecked(false);
      setLightMode();
    }
  };

  return (
    <div
      className={`${!isChecked ? 'dark_mode' : 'dark_mode dark_mode_checked'}`}
      onClick={toogleTheme}
    >
      <div className="inside" />
    </div>
  );
};

export default DarkMode;
