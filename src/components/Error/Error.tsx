import img from '../../assets/pngegg.png';
import classes from './Error.module.scss';
import Button from '../UI/Button';

const Error = () => {
  return (

      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes['img-wrapper']}>
            <img src={img} alt="" />
          </div>
          <div className={classes['text-wrapper']}>
            <h2>Something's wrong here...</h2>
            <p>We can't find the page you're looking for.</p>
            <p>Please head back to home page.</p>
            <Button to="/" mode="error" location="center">
              Home
            </Button>
          </div>
        </div>
      </div>

  );
};

export default Error;
