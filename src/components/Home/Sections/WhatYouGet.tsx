import classes from './WhatYouGet.module.scss';
import Button from '../../UI/Button';

const WhatYouGet = () => {
  return (
    <section id={classes['what-you-get']}>
      <div className={classes['triangle-top']} />
      <div className="container">
        <div className={classes['what-you-get']}>
          <div className={classes.left}>
            <h2 className='section-title'>
              Entrepreneurs aren’t always good operators.{' '}
              <span>That’s why you need a business coach.</span>
            </h2>
            <p>
              Entrepreneurs are risk-takers and visionaries. But once your
              business is up and running, you need to streamline your operation
              as soon as possible so you can get back to what you do best: being
              a visionary. Our coaches will help you do that.
            </p>
            <div className={classes.button}>
              <Button to="/coach" mode="gold">
                Find your coach
              </Button>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes['photo__triangle']} />
            <div className={classes.photo}></div>
          </div>
        </div>
      </div>
      <div className={classes['triangle-bottom']} />
    </section>
  );
};

export default WhatYouGet;
