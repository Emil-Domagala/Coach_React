import classes from './ErrorModal.module.scss';
import { createPortal } from 'react-dom';

const ErrorModal = (props: { hasError: any }) => {
  const modalEl: any = document.getElementById('modal');

//   console.log(props.hasError)

  const content = (
    <>
      <div className={classes.bgc} />
      <div className={classes.card}>
        <h2 className={classes.title}>An Error Accured</h2>
        <p className={classes.text}>404 or smthing</p>
        <button>Please try later</button>
      </div>
    </>
  );

  return <>{createPortal(content, modalEl)}</>;
};

export default ErrorModal;
