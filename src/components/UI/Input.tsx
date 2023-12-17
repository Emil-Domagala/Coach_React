import classes from './Input.module.scss';

const Input = (props: any) => {
  return (
    <div className={classes['input-wrapper']}>
      <label htmlFor={props.label}>{props.label}</label>
      {props.type !== 'textarea' && (
        <input
          type={props.type}
          id={props.label}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
      )}
      {props.type === 'textarea' && (
        <textarea
          name={props.label}
          id={props.label}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
      )}
      {props.inputHasError && (
        <p className={classes.error}>{props.errorMessage}</p>
      )}
    </div>
    
  );
};

export default Input;
