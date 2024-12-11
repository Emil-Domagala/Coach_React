import classes from './Form.module.scss';

const Form = (props: any) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <h4>{props.header}</h4>
      {props.children}
      <button className={classes.button} disabled={props.disabled}>
        {props.button}
      </button>
    </form>
  );
};

export default Form;
