import classes from './Filter.module.scss';
import { useState } from 'react';

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
  const [showList, setShowList] = useState(false);

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

  return (
    <>
      <div
        className={`${classes.bgc} ${showList ? classes['ul-display'] : ''}`}
        onClick={hideList}
      ></div>
      <div className={`container ${classes.wrapper}`}>
        <form className={classes.filter}>
          <div className={classes['input-wrapper']}>
            <label htmlFor="">Name search</label>
            <input type="text" placeholder="Eg. Emil Domagała" />
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
                  <li
                    key={option.value}
                    className={classes['select-li']}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className={classes.button}>Search for coaches</button>
        </form>
      </div>
    </>
  );
};
export default Filter;
