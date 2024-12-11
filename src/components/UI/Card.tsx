import classes from './Card.module.scss';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const Card = (props: { children: JSX.Element; className?: any }) => {
  const modalEl: any = document.getElementById('modal');

  const { children } = props;

  return (
    <>
      {createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classes.bgc}
        >
          <motion.dialog
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            open
            className={`${classes.card} ${props.className}`}
          >
            {children}
          </motion.dialog>
        </motion.div>,
        modalEl,
      )}
    </>
  );
};
export default Card;
