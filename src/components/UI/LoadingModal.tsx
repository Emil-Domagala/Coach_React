import classes from './LoadingModal.module.scss';
import Card from './Card';

const LoadingModal = (props: any) => {
  return (
      <Card className={classes.card}>
        <>
          <div className={classes.spiner}>
            <div className={classes['lds-roller']}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <p>{props.text}</p>
        </>
      </Card>
  );
};

export default LoadingModal;
