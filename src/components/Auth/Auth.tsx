import classes from './Auth.module.scss';
import { useState } from 'react';
import useInputValidation from '../../hooks/use-input-validation';
import useAuth from '../../hooks/use-auth';

const Login = () => {
  const [mode, setMode] = useState('LOGIN');
  const { authHandler } = useAuth();

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
  } = useInputValidation((value: any) => value.trim().length > 6);

  let formIsValid = false;

  if (entredEmailIsValid && entredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = (e: any) => {
    e.preventDefault();
    console.log(entredEmail);
    console.log(entredPassword);

    if (!formIsValid) {
      return;
    }

    authHandler(mode, entredEmail, entredPassword);

    clearEmailHandler();
    clearPasswordHandler();
  };

  return (
    <>
      <main className={classes.main}>
        <div className="container">
          <form className={classes.form} onSubmit={formSubmitionHandler}>
            <h4>{mode === 'LOGIN' ? 'Log In' : 'Create account'}</h4>
            <div className={classes['input-wrapper']}>
              <label htmlFor="email">email</label>
              <input
                type="emil"
                id="email"
                placeholder="awesome.marketer@example.com"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={entredEmail}
              />
              {emailImputHasError && (
                <p className={classes.error}>
                  Please check if your email is correct
                </p>
              )}
            </div>
            <div className={classes['input-wrapper']}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={entredPassword}
              />
              {passwordImputHasError && (
                <p className={classes.error}>
                  Password has to be at least 6 sings long
                </p>
              )}
            </div>
            <button className={classes.button} disabled={!formIsValid}>
              {mode === 'LOGIN' ? 'Log in' : 'Signup'}
            </button>
            <p className={classes['change-mode']} onClick={modeHandler}>
              {mode === 'LOGIN' ? 'Create account' : 'Log in'}
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
