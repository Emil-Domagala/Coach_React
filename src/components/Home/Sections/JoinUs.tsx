import classes from './JoinUs.module.scss';
import Button from '../../UI/Button';

const JoinUs = () => {
  return (
    <section id={classes['join-us']}>
      <div className={classes['triangle-top']} />
      <div className={classes['join-us']}>
        <div className={`${classes['wrapper']} container`}>
          <div className={classes.left}>
            <h2 className="section-title">
              Are you interested in becoming a Business Made Simple Business
              Coach?
            </h2>
            <p className={classes['text-top']}>
              If you want to be unstoppable as a business coach, you need three
              things:
            </p>
            <ol>
              <li>A system to scale your coaching business</li>
              <li>A proven curriculum that delivers results to clients</li>
              <li>A community of experts to share best practices with</li>
            </ol>
            <p className={classes['text-bottom']}>
              Get these and much more when you become a Business Made Simple
              Certified Coach.
            </p>
            <Button to="/join" mode="white" location="left">
              Apply now
            </Button>
          </div>
          <div className={classes.right}>
            <div className={classes.photo}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
