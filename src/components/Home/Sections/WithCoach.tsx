import Button from '../../UI/Button';
import classes from './WithCoach.module.scss';
import Check from '../../../icons/Check';
import SectionTitleHome from '../../UI/SectionTitleHome';
import { motion } from 'framer-motion';

const WithCoach = () => {
  return (
    <section id={classes['with-coach']}>
      <div className="container">
        <SectionTitleHome
          main="You don't have to go through life burned out and stretched thin."
          gold="Our business coaches can help you…"
        />
        <div className={classes.reasons}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={classes.reason}
          >
            <div className={classes.wrapper}>
              <div className={classes.circle}>
                <Check />
              </div>
              <p>Get out of the day-to-day</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={classes.reason}
          >
            <div className={classes.wrapper}>
              <div className={classes.circle}>
                <Check />
              </div>
              <p>Get dependable, predictable results</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={classes.reason}
          >
            <div className={classes.wrapper}>
              <div className={classes.circle}>
                <Check />
              </div>
              <p>Break revenue records</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={classes.reason}
          >
            <div className={classes.wrapper}>
              <div className={classes.circle}>
                <Check />
              </div>
              <p>Put the right processes in place</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={classes.reason}
          >
            <div className={classes.wrapper}>
              <div className={classes.circle}>
                <Check />
              </div>
              <p>Enjoy more free time and flexibility</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={classes.reason}
          >
            <div className={classes.wrapper}>
              <div className={classes.circle}>
                <Check />
              </div>
              <p>Free up your schedule for passion projects</p>
            </div>
          </motion.div>
        </div>
        <Button mode="gold" to="/coach" location="center">
          Find your coach
        </Button>
      </div>
    </section>
  );
};

export default WithCoach;
