import { useState } from 'react';
import useInputValidation from '../../hooks/use-input-validation';
import useCheckboxValidation from '../../hooks/use-checkbox-validation';
import useHTTPCoach from '../../hooks/use-http-coach';
// import useAuth from '../../hooks/use-auth';
import Form from '../UI/Form';
import Input from '../UI/Input';
import classes from './BecomeCoach.module.scss';
import { useSelector } from 'react-redux';

const BecomeCoach = () => {
  // const { authHandler } = useAuth();
  const { registerCoach } = useHTTPCoach();
  const userData = useSelector((state: any) => state.user);

  const {
    value: entredName,
    isValid: entredNameIsValid,
    hasError: nameImputHasError,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    clearInputHandler: clearNameHandler,
  } = useInputValidation(
    (value: string) => value.trim() !== '' && value.trim() !== '',
  );
  const {
    value: entredLastname,
    isValid: entredLastnameIsValid,
    hasError: lastnameImputHasError,
    inputBlurHandler: lastnameBlurHandler,
    valueChangeHandler: lastnameChangeHandler,
    clearInputHandler: clearLastnameHandler,
  } = useInputValidation(
    (value: string) => value.trim() !== '' && value.trim() !== '',
  );
  const {
    value: entredPrice,
    isValid: entredPriceIsValid,
    hasError: priceImputHasError,
    inputBlurHandler: priceBlurHandler,
    valueChangeHandler: priceChangeHandler,
    clearInputHandler: clearPriceHandler,
  } = useInputValidation(
    (value: string) => value.trim() !== '' && value.trim() !== '',
  );
  const {
    value: entredUrl,
    isValid: entredUrlIsValid,
    hasError: urlImputHasError,
    inputBlurHandler: urlBlurHandler,
    valueChangeHandler: urlChangeHandler,
    clearInputHandler: clearUrlHandler,
  } = useInputValidation(
    (value: string) => value.trim() !== '' && value.trim() !== '',
  );
  const {
    value: entredDesc,
    isValid: entredDescIsValid,
    hasError: descImputHasError,
    inputBlurHandler: descBlurHandler,
    valueChangeHandler: descChangeHandler,
    clearInputHandler: clearDescHandler,
  } = useInputValidation(
    (value: string) => value.trim() !== '' && value.trim() !== '',
  );

  const {
    value: waysValue,
    isValid: waysIsValid,
    hasError: waysHasError,
    inputBlurHandler: waysBlurHandler,
    valueChangeHandler: waysChangeHandler,
    clearInputHandler: clearWaysHandler,
  } = useCheckboxValidation({ virtual: false, inPerson: false });
  const {
    value: sizeValue,
    isValid: sizeIsValid,
    hasError: sizeHasError,
    inputBlurHandler: sizeBlurHandler,
    valueChangeHandler: sizeChangeHandler,
    clearInputHandler: clearSizeHandler,
  } = useCheckboxValidation({ big: false, medium: false, small: false });

  let formIsValid = false;

  if (
    entredNameIsValid &&
    entredLastnameIsValid &&
    entredPriceIsValid &&
    entredUrlIsValid &&
    entredDescIsValid &&
    waysIsValid &&
    sizeIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitionHandler = (e: any) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const colectedData = {
      entredName,
      entredLastname,
      entredPrice,
      entredUrl,
      entredDesc,
      waysValue,
      sizeValue,
    };

    registerCoach(colectedData, userData);

    //   authHandler(mode, entredname, entredPassword);

    // clearNameHandler();
    // clearLastnameHandler()
    // clearPriceHandler()
    // clearUrlHandler()
    // clearDescHandler()
    // clearWaysHandler()
    // clearSizeHandler()
  };

  return (
    <div className={classes.main}>
      <div className="container">
        <Form
          onSubmit={formSubmitionHandler}
          header="Become a coach"
          button="Register"
          disabled={!formIsValid}
        >
          <Input
            type="text"
            label="Name"
            placeholder="Emil"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={entredName}
            inputHasError={nameImputHasError}
            errorMessage="This input cannot be empty"
          />
          <Input
            type="text"
            label="lastname"
            placeholder="Nowak"
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            value={entredLastname}
            inputHasError={lastnameImputHasError}
            errorMessage="This input cannot be empty"
          />
          <Input
            type="number"
            label="price"
            placeholder="Your price in USD"
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
            value={entredPrice}
            inputHasError={priceImputHasError}
            errorMessage="Your price has to be grater than 0"
          />
          <Input
            type="url"
            label="Your background"
            placeholder="https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg"
            onChange={urlChangeHandler}
            onBlur={urlBlurHandler}
            value={entredUrl}
            inputHasError={urlImputHasError}
            errorMessage="This input cannot be empty"
          />
          <Input
            type="textarea"
            label="Description"
            placeholder="Tell few words about yourself to your future customer."
            onChange={descChangeHandler}
            onBlur={descBlurHandler}
            value={entredDesc}
            inputHasError={descImputHasError}
            errorMessage="This input cannot be empty"
          />

          <div className={classes['checkbox-wrapper']}>
            <p className={classes.label}>Company size</p>
            <div className={classes['checkbox-options']}>
              <div className="option">
                <label htmlFor="big">
                  <input
                    type="checkbox"
                    id="big"
                    onChange={sizeChangeHandler}
                    onBlur={sizeBlurHandler}
                    checked={sizeValue.big}
                  />
                  <span className={classes.checkbox} />{' '}
                  <span className={classes['option-name']}>Big</span>
                </label>
              </div>
              <div className="option">
                <label htmlFor="medium">
                  <input
                    type="checkbox"
                    id="medium"
                    onChange={sizeChangeHandler}
                    onBlur={sizeBlurHandler}
                    checked={sizeValue.medium}
                  />
                  <span className={classes.checkbox} />{' '}
                  <span className={classes['option-name']}>Medium</span>
                </label>
              </div>
              <div className="option">
                <label htmlFor="small">
                  <input
                    type="checkbox"
                    id="small"
                    onChange={sizeChangeHandler}
                    onBlur={sizeBlurHandler}
                    checked={sizeValue.small}
                  />
                  <span className={classes.checkbox} />{' '}
                  <span className={classes['option-name']}>Small</span>
                </label>
              </div>
            </div>
            {sizeHasError && (
              <p className={classes.error}>
                At least one option must be selected
              </p>
            )}
          </div>

          <div className={classes['checkbox-wrapper']}>
            <p className={classes.label}>ways you can work</p>
            <div className={classes['checkbox-options']}>
              <div className="option">
                <label htmlFor="virtual">
                  <input
                    type="checkbox"
                    id="virtual"
                    onChange={waysChangeHandler}
                    onBlur={waysBlurHandler}
                    checked={waysValue.virtual}
                  />
                  <span className={classes.checkbox} />{' '}
                  <span className={classes['option-name']}>Virtual</span>
                </label>
              </div>
              <div className="option">
                <label htmlFor="inPerson">
                  <input
                    type="checkbox"
                    id="inPerson"
                    onChange={waysChangeHandler}
                    onBlur={waysBlurHandler}
                    checked={waysValue.inPerson}
                  />
                  <span className={classes.checkbox} />{' '}
                  <span className={classes['option-name']}>In Person</span>
                </label>
              </div>
            </div>
            {waysHasError && (
              <p className={classes.error}>
                At least one option must be selected
              </p>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BecomeCoach;
