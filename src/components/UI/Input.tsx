import classes from './Input.module.scss';

const Input = (props: any) => {
  return (
    <div className={classes['input-wrapper']}>
      <label htmlFor={props.type}>{props.type}</label>
      <input
        type={props.type}
        id={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      {props.inputHasError && (
        <p className={classes.error}>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
