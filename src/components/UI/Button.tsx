import { Link, To } from 'react-router-dom';
import classes from './Button.module.scss';

const Button = (props: { children: String; mode: any; to: Partial<To> }) => {
  const { children, mode, to } = props;
  return (
    <Link to={to}>
      <button className={`${classes.button} ${classes[mode]}`}>
        {children}
      </button>
    </Link>
  );
};
export default Button;
