import classes from './NavSlider.module.scss';
import ToggleMode from '../ToggleMode/ToggleMode';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../../store/slices/user';

const NavSlider = (props: { isActive: boolean }) => {
  const location = useLocation().pathname;
  let isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  let isCoach = useSelector((state: any) => state.user.isCoach);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  const Messages = isLoggedIn && isCoach && (
    <li
      className={`${classes['slider-list__link']} ${
        location === '/messages' ? classes.current : ''
      }`}
    >
      <Link to="/messages">Messages</Link>
    </li>
  );

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
          <Link to="/coach">Find your coach</Link>
        </li>
        {isCoach !== true && (
          <li
            className={`${classes['slider-list__link']} ${
              location === '/join' ? classes.current : ''
            }`}
          >
            <Link to="/join">Become a coach</Link>
          </li>
        )}
        {Messages}
        {!isLoggedIn && (
          <li
            className={`${classes['slider-list__link']} ${
              location === '/auth' ? classes.current : ''
            }`}
          >
            <Link to="/auth">Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <li className={classes['slider-list__link']} onClick={logoutHandler}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};
export default NavSlider;
