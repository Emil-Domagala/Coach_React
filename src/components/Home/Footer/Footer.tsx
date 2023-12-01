import classes from './Footer.module.scss';
import Logo from '../../../assets/icons8-logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className={classes["logo-wrapper"]}>
          <img src={Logo} alt="" />
        </div>
        <div className={classes.terms}>
          <p>
            Copyright &copy; {year} this is a copy of{' '}
            <a href="https://hireacoach.com/#">hire a coach</a>
          </p>
        </div>
        <div className={classes.links}>
          <Link to="/join">Become a Coach</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
