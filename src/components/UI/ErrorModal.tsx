import classes from './ErrorModal.module.scss';
import Card from './Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const ErrorModal = (props: { errorMessage?: string }) => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const errorHandler = () => {
    setShowModal(false);
  };

  let message = 'An error accured. Please try again later.';
  if (props.errorMessage) {
    message = props.errorMessage;
  }

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <Card className={classes.card}>
            <>
              <h2 className={classes.title}>Error</h2>
              <p className={classes.text}>{message}</p>
              <button className={classes.button} onClick={errorHandler}>
                Ok
              </button>
            </>
          </Card>
        )}
      </AnimatePresence>
    </>
  );
};

export default ErrorModal;
