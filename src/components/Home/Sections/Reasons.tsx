import classes from './Reasons.module.scss';
// import bitcoin from '../../../icons/bitcoin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';


import Bitcoin from '../../../icons/Bitcoin';

const Reasons = () => {
  return (
    <section id='reasons'>
      <div className={classes.reasons}>
        <div className={classes.reason}>
          <div className={classes.img}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <h3>1. Find your coach</h3>
          <p>
            Find the right Business Made Simple Coach for your needs and
            industry
          </p>
        </div>
        <div className={classes.reason}>
          <div className={classes.img}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h3>2. Hire your coach</h3>
          <p>Get mentored through our 6-step business growth plan</p>
        </div>
        <div className={classes.reason}>
          <div className={classes.img}>
            {/* <svg src={Bitcoin} /> */}
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
