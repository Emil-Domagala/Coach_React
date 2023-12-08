import classes from './NavSlider.module.scss';
import ToggleMode from '../ToggleMode/ToggleMode';
import { Link, useLocation } from 'react-router-dom';

const NavSlider = (props: { isActive: boolean }) => {
  const location = useLocation().pathname;
  return (
    <div
      className={`${classes.slider} ${props.isActive ? classes.active : ''}`}
    >
      <div className={classes['toggle_mode']}>
        <ToggleMode />
      </div>
      <ul className={classes['slider-list']}>
        <li
          className={`${classes['slider-list__link']} ${
            location === '/' ? classes.current : ''
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`${classes['slider-list__link']} ${
            location === '/coach' ? classes.current : ''
          }`}
        >
          <Link to="coach">Find your coach</Link>
        </li>
        <li
          className={`${classes['slider-list__link']} ${
            location === '/join' ? classes.current : ''
          }`}
        >
          <Link to="/join">Become a coach</Link>
        </li>
        <li
          className={`${classes['slider-list__link']} ${
            location === '/messages' ? classes.current : ''
          }`}
        >
          <Link to="/messages">Messages</Link>
        </li>
        <li
          className={`${classes['slider-list__link']} ${
            location === '/auth' ? classes.current : ''
          }`}
        >
          <Link to="/auth">Login</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavSlider;
