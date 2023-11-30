import { Link, To } from 'react-router-dom';
import classes from './Button.module.scss';

const Button = (props: {
  children: String;
  mode: 'gold' | 'white';
  to: Partial<To>;
  location:'center'|'left';
}) => {
  const { children, mode, to, location } = props;
  return (
    <div className={classes[location]}>
      <Link to={to} className={classes.link}>
        <button className={`${classes.button} ${classes[mode]}`}>
          <div>{children}</div>
        </button>
      </Link>
    </div>
  );
};
export default Button;
