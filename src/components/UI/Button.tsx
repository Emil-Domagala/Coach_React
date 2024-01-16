import { Link, To } from 'react-router-dom';
import classes from './Button.module.scss';
import { motion } from 'framer-motion';

const Button = (props: {
  children: String;
  mode: 'gold' | 'white' | 'error';
  to?: Partial<To>;
  location: 'center' | 'left';
}) => {
  const { children, mode, to, location } = props;
  return (
    <div className={classes[location]}>
      {to && (
        <Link to={to} className={classes.link}>
          <motion.button
            initial={{ scale: 0.4 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            className={`${classes.button} ${classes[mode]}`}
          >
            <div>{children}</div>
          </motion.button>
        </Link>
      )}
      {!to && (
        <button className={`${classes.button} ${classes[mode]}`}>
          <div>{children}</div>
        </button>
      )}
    </div>
  );
};
export default Button;
