import classes from './Hero.module.scss';
import Button from '../../UI/Button';

const Hero = () => {
  return (
    <header id='header'>
      <div className={classes.hero}>
        <div className={classes['hero__bgc']}></div>
        <div className={classes['hero__text-container']}>
          <h1>
            Business Coaching for <span>Busy Entrepreneurs</span>
          </h1>
          <p>
            Work less, make more, and spend more time doing the things you truly
            love – in your business and in your life.
          </p>

          <Button mode="gold" to="/coach" location="left">
            Find your coach
          </Button>

          <p className={classes['bottom-text']}>
            Most business owners are living with constant stress and overwhelm.
            That's not sustainable. Our business coaches help you work smarter
            and faster so your business becomes your vehicle for freedom – not a
            burden.
          </p>
        </div>
        <div className={classes['white-triangle']}>
          <div className={classes['gold-triangle']}></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
