import classes from './NavSlider.module.scss';
import ToggleMode from '../ToggleMode/ToggleMode';

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
          Home
        </li>
        <li className={classes['slider-list__link']}>Find your coach</li>
        <li className={classes['slider-list__link']}>Become a coach</li>
        <li className={classes['slider-list__link']}>Messages</li>
        <li className={classes['slider-list__link']}>Login</li>
      </ul>
    </div>
  );
};
export default NavSlider;
