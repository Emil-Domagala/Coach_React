import classes from './Reasons.module.scss';
import Bitcoin from '../../../icons/Bitcoin';
import MagnGlass from '../../../icons/MagnGlass';
import UserTie from '../../../icons/UserTie';
import { motion } from 'framer-motion';

const Reasons = () => {
  return (
    <section id="reasons">
      <div className={classes.reasons}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={classes.reason}
        >
          <div className={classes.img}>
            <MagnGlass />
          </div>
          <h3>1. Find your coach</h3>
          <p>
            Find the right Business Made Simple Coach for your needs and
            industry
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={classes.reason}
        >
          <div className={classes.img}>
            <UserTie />
          </div>
          <h3>2. Hire your coach</h3>
          <p>Get mentored through our 6-step business growth plan</p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={classes.reason}
        >
          <div className={classes.img}>
            <Bitcoin />
          </div>
          <h3>3. Grow your revenue & free time</h3>
          <p>
            Enjoy a more profitable business and more time to do what you love
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reasons;
