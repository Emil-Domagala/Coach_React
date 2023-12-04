import classes from './NavSlider.module.scss';
import ToggleMode from '../ToggleMode/ToggleMode';
import { Link } from 'react-router-dom';

const NavSlider = (props: { isActive: boolean }) => {
  return (
    <div
      className={`${classes.slider} ${props.isActive ? classes.active : ''}`}
    >
      <div className={classes['toggle_mode']}>
        <ToggleMode />
      </div>
      <ul className={classes['slider-list']}>
        <li className={`${classes['slider-list__link']} ${classes.current}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes['slider-list__link']}>
          <Link to="coach">Find your coach</Link>
        </li>
        <li className={classes['slider-list__link']}>Become a coach</li>
        <li className={classes['slider-list__link']}>Messages</li>
        <li className={classes['slider-list__link']}>
          <Link to="/auth">Login</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavSlider;
