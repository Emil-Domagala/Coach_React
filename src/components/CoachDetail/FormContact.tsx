import classes from './FormContact.module.scss';
import Button from '../UI/Button';
import useInputValidation from '../../hooks/use-input-validation';
import Input from '../UI/Input';
import { useParams } from 'react-router-dom';
import useHTTPmessage from '../../hooks/use-http-message';

const FormContact = () => {
  const { id } = useParams();
  const { sendMessage } = useHTTPmessage();

  const {
    value: entredName,
    isValid: entredNameIsValid,
    hasError: nameImputHasError,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    clearInputHandler: clearNameHandler,
  } = useInputValidation((value: string) => value.trim() !== '');
  const {
    value: entredPhone,
    isValid: entredPhoneIsValid,
    hasError: phoneImputHasError,
    inputBlurHandler: phoneBlurHandler,
    valueChangeHandler: phoneChangeHandler,
    clearInputHandler: clearPhoneHandler,
  } = useInputValidation(
    (value: string) => value.trim() !== '' && value.length >= 9,
  );
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
    value: entredMessage,
    isValid: entredMessageIsValid,
    hasError: messageImputHasError,
    inputBlurHandler: messageBlurHandler,
    valueChangeHandler: messageChangeHandler,
    clearInputHandler: clearMessageHandler,
  } = useInputValidation((value: string) => value.trim() !== '');

  let formIsValid = false;

  if (
    entredNameIsValid &&
    entredPhoneIsValid &&
    entredEmailIsValid &&
    entredMessageIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (!formIsValid) {
        nameBlurHandler()
        phoneBlurHandler()
        emailBlurHandler()
        messageBlurHandler()
      return;
    }


    const colectedData = {
      entredName: entredName,
      entredPhone: entredPhone,
      entredEmail: entredEmail,
      entredMessage: entredMessage,
      userId: id,
    };

    sendMessage(colectedData);

    clearNameHandler();
    clearPhoneHandler();
    clearEmailHandler();
    clearMessageHandler();
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          label="Name"
          placeholder="Jane Appleseed"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={entredName}
          inputHasError={nameImputHasError}
          errorMessage="This input cannot be empty"
          mode="contact"
        />
        <div className={classes['contact-data']}>
          <Input
            type="tel"
            label="Phone"
            placeholder="(___) ___ ___"
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            value={entredPhone}
            inputHasError={phoneImputHasError}
            errorMessage="This input cannot be empty"
            mode="contact"
          />
          <Input
            type="email"
            label="Email"
            placeholder="jane@gmail.com"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={entredEmail}
            inputHasError={emailImputHasError}
            errorMessage="This input cannot be empty"
            mode="contact"
          />
        </div>
        <Input
          type="textarea"
          label="Contact"
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={entredMessage}
          inputHasError={messageImputHasError}
          errorMessage="Message cannot be empty"
          mode="contact"
        />
        <Button mode="gold" location="center">
          Send
        </Button>
      </form>
    </div>
  );
};
export default FormContact;
