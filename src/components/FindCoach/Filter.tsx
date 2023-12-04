import classes from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={`container ${classes.wrapper}`}>
      <form className={classes.filter}>
        <div className={classes['input-wrapper']}>
          <label htmlFor="">Name search</label>
          <input type="text" placeholder="Eg. Emil Domagała" />
        </div>
        <div className={classes['input-wrapper']}>
          <label htmlFor="">Company size search</label>
          <input list="fields" placeholder="Eg. Big company" />
          {/* <option value="small company" />
          <option value="medium company" />
          <option value="big company" /> */}
          {/* <datalist id="fields">
          </datalist> */}
        </div>
        <button className={classes.button}>Search for coaches</button>
      </form>
    </div>
  );
};
export default Filter;
