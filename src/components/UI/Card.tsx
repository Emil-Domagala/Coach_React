import classes from './Card.module.scss';

const Card = (props: { children: JSX.Element }) => {
  const { children } = props;
  return <div className={classes.card}>{children}</div>;
};
export default Card