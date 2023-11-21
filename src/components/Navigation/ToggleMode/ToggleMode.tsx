import React from 'react';
import { useState, useEffect,useCallback } from 'react';
import './ToggleMode.scss';

const DarkMode = () => {
  const [isChecked, setIsChecked] = useState(false);
  const body = document.querySelector('body');

  const setDarkMode = () => {
    body!.setAttribute('data-theme', 'dark');
  };
  const setLightMode = () => {
    body!.setAttribute('data-theme', 'light');
  };

  useEffect(() => {
    if (body!.getAttribute('data-theme') === 'dark') {
      setIsChecked(true);
    } else if (body!.getAttribute('data-theme') === 'light') {
      setIsChecked(false);
    } else {
      setIsChecked(false);
      setLightMode();
    }
  }, [body]);

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
