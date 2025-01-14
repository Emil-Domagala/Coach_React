import classes from './Footer.module.scss';
import Logo from '../../assets/icons8-logo.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../store/slices/user';

const Footer = () => {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const isCoach = useSelector((state: any) => state.user.isCoach);
  const year = new Date().getFullYear();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  return (
    <footer>
      <div className={`container ${classes.wrapper}`}>
        <div className={classes['top-footer']}>
          <a href="/" className={classes['logo-wrapper']}>
            <img src={Logo} alt="" />
          </a>
          <div className={classes.terms}>
            <p>
              Copyright &copy; {year} this is a copy of{' '}
              <a href="https://hireacoach.com/#" target="_blank" rel="noreferrer">
                hire a coach
              </a>{' '}
              page
            </p>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.links}>
          {isCoach === true ? <Link to="/messages">Messages</Link> : <Link to="/join">Become a Coach</Link>}

          {isLoggedIn === true ? (
            // <button className={classes['logout-btn']} onClick={logoutHandler}>
            //   Logout
            // </button>
            <Link to="/" onClick={logoutHandler}>
              Logout
            </Link>
          ) : (
            <Link to="/auth">Login</Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
