import classes from './Card.module.scss';
import { createPortal } from 'react-dom';

const Card = (props: { children: JSX.Element,className?:any }) => {
  const modalEl: any = document.getElementById('modal');

  const { children } = props;

  return (
    <>{createPortal(<div className={`${classes.card} ${props.className}`}>{children}</div>, modalEl)}</>
  );
};
export default Card;
