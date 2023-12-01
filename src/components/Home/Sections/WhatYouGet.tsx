import classes from './WhatYouGet.module.scss';
import Button from '../../UI/Button';

const WhatYouGet = () => {
  return (
    <section id={classes['what-you-get']}>
      <div className={classes['triangle-top']} />
      <div className="container">
        <div className={classes['what-you-get-class']}>
          <div className={classes.left}>
            <h2 className="section-title">
              Entrepreneurs aren’t always good operators.{' '}
              <span>That’s why you need a business coach.</span>
            </h2>
            <p>
              Entrepreneurs are risk-takers and visionaries. But once your
              business is up and running, you need to{' '}
              <span>streamline your operation</span>
              as soon as possible so you can get back to what you do best:{' '}
              <span>being a visionary</span>. Our coaches will help you do that.
            </p>
              <Button to="/coach" mode="gold" location="left">
                Find your coach
              </Button>
          </div>
          <div className={classes.right}>
            <div className={classes.photo}></div>
          </div>
        </div>
      </div>
      <div className={classes['triangle-bottom']} />
    </section>
  );
};

export default WhatYouGet;
