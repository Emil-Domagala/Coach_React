import classes from './Filter.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coachesActions } from '../../store/slices/coaches';

const options = [
  {
    label: 'Please Choose...',
    value: 'empty',
    disabled: true,
  },
  {
    label: 'Small Company',
    value: 'small',
  },
  {
    label: 'Medium Company',
    value: 'medium',
  },
  {
    label: 'Big Company',
    value: 'big',
  },
];

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState('Please Choose...');
  const [entredVal, setEntredVal] = useState('');
  const [showList, setShowList] = useState(false);
  const allCoaches = useSelector((state: any) => state.coaches.coaches);
  const initialized = useSelector((state: any) => state.coaches.initialized);
  const dispatch = useDispatch();

  const changeValHandler = (e: any) => {
    setEntredVal(e.target.value);
  };

  const listHandler = (e: any) => {
    const value = e.target.innerText;
    setSelectedValue(value);
    hideList();
  };

  const hideList = () => {
    setShowList(false);
  };

  const toggleListHandler = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    if (initialized === true) {
      const data = {
        entredVal: '',
        selectedValueId: 'empty',
        allCoaches,
      };
      dispatch(coachesActions.filterCoaches(data));
    }
  }, [initialized]);

  const filterCoachesHandler = (event: any) => {
    event.preventDefault();
    let selectedValueId = 'empty';
    if (selectedValue === 'Big Company') {
      selectedValueId = 'big';
    }
    if (selectedValue === 'Medium Company') {
      selectedValueId = 'medium';
    }
    if (selectedValue === 'Small Company') {
      selectedValueId = 'small';
    }
    const data = { entredVal, selectedValueId, allCoaches };
    dispatch(coachesActions.filterCoaches(data));
  };

  return (
    <>
      <div
        className={`${classes.bgc} ${showList ? classes['ul-display'] : ''}`}
        onClick={hideList}
      ></div>
      <div className={`container`}>
        <form className={classes.filter}>
          <div className={classes['input-wrapper']}>
            <label htmlFor="">Name search</label>
            <input
              type="text"
              placeholder="Eg. Emil Domagała"
              value={entredVal}
              onChange={changeValHandler}
            />
          </div>
          <div className={classes['input-wrapper']}>
            <label htmlFor="">Company size search</label>
            <div className={classes['select-container']}>
              <select
                className={`${classes['select-box']} ${
                  selectedValue === 'Please Choose...' && classes['empty']
                }`}
                value={selectedValue}
                onChange={() => {
                  setSelectedValue(selectedValue);
                }}
                onClick={toggleListHandler}
              >
                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.label}
                    disabled={option.disabled}
                    hidden={option.disabled}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <ul
                className={`${classes['select-ul']} ${
                  showList ? classes['ul-display'] : ''
                }`}
                onClick={listHandler}
              >
                {options.map((option) => (
                  <li key={option.value} className={classes['select-li']}>
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className={classes.button} onClick={filterCoachesHandler}>
            Search for coaches
          </button>
        </form>
      </div>
    </>
  );
};
export default Filter;
