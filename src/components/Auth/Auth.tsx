import classes from './Auth.module.scss';
import { useState } from 'react';
import useInputValidation from '../../hooks/use-input-validation';
import useAuth from '../../hooks/use-auth';
import Input from '../UI/Input';
import Form from '../UI/Form';
import ErrorModal from '../UI/ErrorModal';

const Login = () => {
  const [mode, setMode] = useState('LOGIN');
  const { signup, login, error } = useAuth();


  const modeHandler = () => {
    if (mode === 'LOGIN') {
      setMode('SIGNUP');
    } else {
      setMode('LOGIN');
    }
  };

  const {
    value: entredEmail,
    isValid: entredEmailIsValid,
    hasError: emailImputHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    clearInputHandler: clearEmailHandler,
  } = useInputValidation(
    (value: string) => value.trim() !== '' && value.includes('@'),
  );
  const {
    value: entredPassword,
    isValid: entredPasswordIsValid,
    hasError: passwordImputHasError,
    inputBlurHandler: passwordBlurHandler,
    valueChangeHandler: passwordChangeHandler,
    clearInputHandler: clearPasswordHandler,
  } = useInputValidation((value: any) => value.trim().length >= 6);

  let formIsValid = false;

  if (entredEmailIsValid && entredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = async (e: any) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (mode === 'LOGIN') {
      login(entredEmail, entredPassword);
    }
    if (mode === 'SIGNUP') {
      signup(entredEmail, entredPassword);
    }
    clearEmailHandler();
    clearPasswordHandler();
  };

  const header = mode === 'LOGIN' ? 'Log In' : 'Create account';
  const button = mode === 'LOGIN' ? 'Log in' : 'Signup';

  return (
    <main className={classes.main}>
      <div className="container">
        <Form
          onSubmit={formSubmitionHandler}
          header={header}
          button={button}
          disabled={!formIsValid}
        >
          <Input
            mode="basic"
            type="email"
            label="email"
            placeholder="awesome.marketer@example.com"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={entredEmail}
            inputHasError={emailImputHasError}
            errorMessage="Please check if your email is correct"
          />
          <Input
            mode="basic"
            type="password"
            label="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={entredPassword}
            inputHasError={passwordImputHasError}
            errorMessage="Password has to be at least 6 sings long"
          />
        </Form>
        <p className={classes['change-mode']} onClick={modeHandler}>
          {mode === 'LOGIN' ? 'Create account' : 'Log in'}
        </p>
      </div>
     {error && <ErrorModal errorMessage={error} />}
    </main>
  );
};

export default Login;
