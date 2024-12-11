import classes from './SmallNav.module.scss';
import ToggleMode from '../ToggleMode/ToggleMode';
import Logo from '../../../assets/icons8-logo.svg';
import { Link } from 'react-router-dom';

const SmallNav = () => {
  return (
    <div className={classes.nav}>
      <div className={`container ${classes.wrapper}`}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ToggleMode />
      </div>
    </div>
  );
};

export default SmallNav;
