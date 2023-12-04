import classes from './Auth.module.scss';
import Logo from '../../assets/icons8-logo.svg';
import { Link } from 'react-router-dom';
import ToggleMode from '../Navigation/ToggleMode/ToggleMode';
import { useState } from 'react';

const Login = () => {
  const [mode, setMode] = useState('Login');

  const modeHandler = () => {
    if (mode === 'Login') {
      setMode('Signup');
    } else {
      setMode('Login');
    }
  };

  return (
    <>
      <nav className={classes.nav}>
        <div className={`container ${classes.wrapper}`}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ToggleMode />
        </div>
      </nav>
      <main className={classes.main}>
        <div className="container">
          <form className={classes.form}>
            <h4>{mode === 'Login' ? 'Log In' : 'Create account'}</h4>
            <div className={classes['input-wrapper']}>
              <label htmlFor="email">email</label>
              <input
                type="emil"
                id="email"
                placeholder="awesome.marketer@example.com"
              />
            </div>
            <div className={classes['input-wrapper']}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button className={classes.button}>
              {mode === 'Login' ? 'Log in' : 'Signup'}
            </button>
            <p className={classes['change-mode']} onClick={modeHandler}>
              {mode === 'Login' ? 'Create account' : 'Log in'}
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
