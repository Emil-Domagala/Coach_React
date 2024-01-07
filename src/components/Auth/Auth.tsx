import classes from './Auth.module.scss';
import { useState } from 'react';
import useInputValidation from '../../hooks/use-input-validation';
import useAuth from '../../hooks/use-auth';
import Input from '../UI/Input';
import Form from '../UI/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/slices/user';

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('LOGIN');
  const { authHandler } = useAuth();
  const dispatch = useDispatch();

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

    await authHandler(mode, entredEmail, entredPassword);

    clearEmailHandler();
    clearPasswordHandler();
    if (mode === 'LOGIN') {
      setTimeout(function () {
        dispatch(userActions.logout());
      }, 1000 * 60 * 60);
      navigate('/');
    }
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
    </main>
  );
};

export default Login;
