import classes from './Input.module.scss';

const Input = (props: {
  label: string;
  type: string;
  placeholder?: string;
  errorMessage: string;
  value: string | number;
  inputHasError: boolean;
  mode: 'basic' | 'contact';
  onChange: any;
  // | React.ChangeEventHandler<HTMLInputElement>
  // | React.ChangeEventHandler<HTMLTextAreaElement>
  // | undefined;
  onBlur: any;
  // | React.FocusEventHandler<HTMLInputElement>
  // | React.FocusEventHandler<HTMLTextAreaElement>
  // | undefined;
}) => {
  let className: any;

  if (props.mode === 'contact') {
    className = classes['contact'];
  }
  if (props.mode === 'basic') {
    className = classes['basic'];
  }

  return (
    <div className={classes['input-wrapper'] + ' ' + className}>
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
          maxLength={300}
        />
      )}
      {props.inputHasError && (
        <p className={classes.error}>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
