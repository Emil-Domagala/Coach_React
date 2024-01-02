import Button from '../../UI/Button';
import classes from './WithCoach.module.scss';
import Check from '../../../icons/Check';

const WithCoach = () => {
  return (
    <section id={classes['with-coach']}>
      <div className="container">
        <h2 className="section-title">
          You don’t have to go through life burned out and stretched thin.
          <span> Our business coaches can help you…</span>
        </h2>
        <div className={classes.reasons}>
          <div className={classes.reason}>
            <div className={classes.wrapper}>
              <div className={classes.circle}><Check/></div>
              <p>Get out of the day-to-day</p>
            </div>
          </div>
          <div className={classes.reason}>
            <div className={classes.wrapper}>
              <div className={classes.circle}><Check/></div>
              <p>Get dependable, predictable results</p>
            </div>
          </div>
          <div className={classes.reason}>
            <div className={classes.wrapper}>
              <div className={classes.circle}><Check/></div>
              <p>Break revenue records</p>
            </div>
          </div>
          <div className={classes.reason}>
            <div className={classes.wrapper}>
              <div className={classes.circle}><Check/></div>
              <p>Put the right processes in place</p>
            </div>
          </div>
          <div className={classes.reason}>
            <div className={classes.wrapper}>
              <div className={classes.circle}><Check/></div>
              <p>Enjoy more free time and flexibility</p>
            </div>
          </div>
          <div className={classes.reason}>
            <div className={classes.wrapper}>
              <div className={classes.circle}><Check/></div>
              <p>Free up your schedule for passion projects</p>
            </div>
          </div>
        </div>
          <Button mode="gold" to="/coach" location='center'>
            Find your coach
          </Button>
      </div>
    </section>
  );
};

export default WithCoach;
