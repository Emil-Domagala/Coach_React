import ToggleMode from '../ToggleMode/ToggleMode';
import classes from './NavBar.module.scss';
import Logo from '../../../assets/icons8-logo.svg';
// Logo icon by https://icons8.com/
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
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
                <li
                  className={`${classes['nav-list__link']} ${classes.current}`}
                >
                  Home
                </li>
              </Link>
              <Link to="/coach">
                <li className={classes['nav-list__link']}>Find your coach</li>
              </Link>
              <Link to="/join">
                <li className={classes['nav-list__link']}>Become a coach</li>
              </Link>
              <Link to="/messages">
                <li className={classes['nav-list__link']}>Messages</li>
              </Link>
              <Link to="/auth">
                <li className={classes['nav-list__link']}>Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
