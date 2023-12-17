import { useState } from 'react';


const useCheckboxValidation = (initialEntredValues:any) => {
  const [wasTouched, setWasTouched] = useState(false);
  const [entredValues, setEntredValues] = useState({ ...initialEntredValues });
  const valueIsValid = Object.values(entredValues).some((val) => val === true);
  const hasError = !valueIsValid && wasTouched;

  const inputBlurHandler = () => {
    setWasTouched(true);
  };

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntredValues({ ...entredValues, [e.target.id]: e.target.checked });
};

  const clearInputHandler = () => {
    let copyObject: any = { ...entredValues };

    for (let key in copyObject) {
      copyObject[key] = false;
    }

    setEntredValues(copyObject);
    setWasTouched(false);
  };

  return {
    value: entredValues,
    isValid: valueIsValid,
    hasError: hasError,
    inputBlurHandler,
    valueChangeHandler,
    clearInputHandler,
  };
};
export default useCheckboxValidation;
