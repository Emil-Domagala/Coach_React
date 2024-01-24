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
    const isHeader = window.scrollY;
    const header = document.querySelector('#header');
    if (!header) {
      return;
    }
    if (isHeader < 550) {
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
      <div className={`${classes.bars} ${isWhite ? classes.white : ''} `}>
        <span className={classes['bar-top']} />
        <span className={classes['bar-center']} />
        <span className={classes['bar-bottom']} />
      </div>
    </button>
  );
};
export default NavButton;
