import ToggleMode from '../ToggleMode/ToggleMode';
import classes from './NavBar.module.scss';
import Logo from '../../../assets/icons8-logo.svg';
// Logo icon by https://icons8.com/
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../../store/slices/user';

const NavBar = () => {
  const location = useLocation().pathname;
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const isCoach = useSelector((state: any) => state.user.isCoach);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  const Messages = isLoggedIn && isCoach && (
    <Link to="/messages">
      <li className={`${classes['nav-list__link']} ${location === '/messages' ? classes.current : ''}`}>Messages</li>
    </Link>
  );

  return (
    <>
      <div className={classes['blank-space']}></div>
      <div className={classes.navigation}>
        <div className="container">
          <div className={classes.wrapper}>
            <div className={classes.logo}>
              <Link to="/">
                <img src={Logo} alt="Page Logo" />
              </Link>
            </div>
            <div className={classes.nav}>
              <div className={classes['toggle-mode']}>
                <ToggleMode />
              </div>
              <ul className={classes['nav-list']}>
                <Link to="/">
                  <li className={`${classes['nav-list__link']} ${location === '/' ? classes.current : ''}`}>Home</li>
                </Link>
                <Link to="/coach">
                  <li className={`${classes['nav-list__link']} ${location === '/coach' ? classes.current : ''}`}>
                    Find your coach
                  </li>
                </Link>
                {isCoach === false && (
                  <Link to="/join">
                    <li className={`${classes['nav-list__link']} ${location === '/join' ? classes.current : ''}`}>
                      Become a coach
                    </li>
                  </Link>
                )}
                {Messages}
                {!isLoggedIn && (
                  <Link to="/auth">
                    <li className={`${classes['nav-list__link']} ${location === '/auth' ? classes.current : ''}`}>
                      Login
                    </li>
                  </Link>
                )}
                {isLoggedIn && (
                  <Link to="/">
                    <li className={classes['nav-list__link']} onClick={logoutHandler}>
                      Logout
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
