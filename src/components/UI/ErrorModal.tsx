import classes from './ErrorModal.module.scss';
import Card from './Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorModal = (props: { errorMessage?: string }) => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const errorHandler = () => {
    setShowModal(false);
    if(!props.errorMessage){
        navigate('/');
    }
  };

  let message = 'An error accured. Please try again later.';
  if (props.errorMessage) {
    message = props.errorMessage;
  }

  return (
    <>
      {showModal && (
        <Card className={classes.card}>
          <>
            <div className={classes.bgc} />
            <h2 className={classes.title}>Error</h2>
            <p className={classes.text}>
              {message}
            </p>
            <button className={classes.button} onClick={errorHandler}>
              Ok
            </button>
          </>
        </Card>
      )}
    </>
  );
};

export default ErrorModal;
