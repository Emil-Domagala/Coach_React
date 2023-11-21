import classes from './NavButtton.module.scss';

const NavButton = (props: { isActive: boolean; onClick: () => void }) => {
  return (
    <button
      className={`${classes.button} ${
        props.isActive ? classes.active : classes.inactive
      }`}
      onClick={props.onClick}
    >
      <div className={classes.bars}>
        <span className={classes['bar-top']} />
        <span className={classes['bar-center']} />
        <span className={classes['bar-bottom']} />
      </div>
    </button>
  );
};
export default NavButton;
