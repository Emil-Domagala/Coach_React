import classes from './NavButtton.module.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NavButton = (props: { isActive: boolean; onClick: () => void }) => {
  const [isWhite, setIsWhite] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    isOnHeader();
  }, [path]);

  const isOnHeader = () => {
    const currentScroll = window.scrollY;
    const header = document.getElementById('header');
    if (header === null) {
      setIsWhite(false);
      return;
    }
    const headerHeight = header.offsetHeight-50;
    if (currentScroll < headerHeight) {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }
  };

  window.addEventListener('scroll', isOnHeader);
  return (
    <button
      className={`${classes.button} ${
        props.isActive ? classes.active : classes.inactive
      }`}
      onClick={props.onClick}
    >
      <div
        className={`${classes.bars} ${isWhite === true ? classes.white : ''} `}
      >
        <span className={classes['bar-top']} />
        <span className={classes['bar-center']} />
        <span className={classes['bar-bottom']} />
      </div>
    </button>
  );
};
export default NavButton;
