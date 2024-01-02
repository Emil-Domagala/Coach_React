import classes from './Reasons.module.scss';
import Bitcoin from '../../../icons/Bitcoin';
import MagnGlass from '../../../icons/MagnGlass';
import UserTie from '../../../icons/UserTie';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Reasons = () => {
  return (
    <section id="reasons">
      <div className={classes.reasons}>
        <div className={classes.reason}>
          <div className={classes.img}>
            <MagnGlass />
          </div>
          <h3>1. Find your coach</h3>
          <p>
            Find the right Business Made Simple Coach for your needs and
            industry
          </p>
        </div>
        <div className={classes.reason}>
          <div className={classes.img}>
            <UserTie />
          </div>
          <h3>2. Hire your coach</h3>
          <p>Get mentored through our 6-step business growth plan</p>
        </div>
        <div className={classes.reason}>
          <div className={classes.img}>
            <Bitcoin />
          </div>
          <h3>3. Grow your revenue & free time</h3>
          <p>
            Enjoy a more profitable business and more time to do what you love
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
