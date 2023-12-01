import classes from './NavButtton.module.scss';

const NavButton = (props: { isActive: boolean; onClick: () => void }) => {
  const header = document.querySelector('#header');
  const isOnHeader = () => {
    // const isHeader = window.scrollY;
    const headerOffset = header?.getBoundingClientRect();
    console.log(headerOffset);
    console.log(window.scrollY)
    // if (isHeader === header.offsetTop) {
    //   console.log('first');
    // }
  };
  window.addEventListener('scroll', isOnHeader);
  return (
    <button
      className={`${classes.button} ${
        props.isActive ? classes.active : classes.inactive
      }`}
      onClick={props.onClick}
    >
      <div className={`${classes.bars} ${props.isActive ? classes.white : ''}`}>
        <span className={classes['bar-top']} />
        <span className={classes['bar-center']} />
        <span className={classes['bar-bottom']} />
      </div>
    </button>
  );
};
export default NavButton;
