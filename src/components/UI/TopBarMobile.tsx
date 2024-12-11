import classes from './TopBarMobile.module.scss';
import Logo from '../../assets/icons8-logo.svg';
import { Link } from 'react-router-dom';

const TopBarMobile = () => {
  return (
    <>
      <div className={classes.bar}>
        <div className="container">
          <div className={classes.logo}>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopBarMobile;
