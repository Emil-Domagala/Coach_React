import classes from './CoachDetailContent.module.scss';
import Check from '../../icons/Check';
import Xmark from '../../icons/Xmark';
import FormContact from './FormContact';
import Button from '../UI/Button';

const CoachDetailContent = (props: any) => {
  const coach = props.selectedCoach;

  const coachFullName = coach.coachName + ' ' + coach.coachLastname;

  const sizeArr: string[] = Object.keys(coach.sizeValue).filter(
    (key) => coach.sizeValue[key],
  );

  console.log(coach);

  return (
    <div className={classes.bgc}>
      <div className={classes.header}>
        <img src={coach.coachUrl} alt="" />
      </div>
      <div className={`container ${classes['wrapper']}`}>
        <div className={classes['main-info']}>
          <h2>{coachFullName}</h2>
          <div className={classes['button-wrapper']}>
            <a href="#contact">
              <button className={classes['contact-button']}>Contact me</button>
            </a>
          </div>
          <div className={classes.ways}>
            <h3>Ways we can work toghether</h3>
            <div className={classes.way}>
              {coach.waysValue.virtual === true ? (
                <div className={classes.sign}>
                  <Check />
                </div>
              ) : (
                <div className={`${classes.sign} ${classes.invalid}`}>
                  <Xmark />
                </div>
              )}

              <p>Virtual</p>
            </div>
            <div className={classes.way}>
              {coach.waysValue.inPerson === true ? (
                <div className={classes.sign}>
                  <Check />
                </div>
              ) : (
                <div className={`${classes.sign} ${classes.invalid}`}>
                  <Xmark />
                </div>
              )}
              <p>In Person</p>
            </div>
          </div>
        </div>
        <div className={classes.more}>
          <div className={classes.desc}>
            <h3 className={classes.underline}>About</h3>
            <p>{coach.coachDesc}</p>
          </div>
          <div className={classes.sizes}>
            <h3 className={classes.underline}>Industries size</h3>
            <ul>
              {sizeArr.map((item: any) => {
                const upperItem = item[0].toLocaleUpperCase() + item.slice(1);
                return <li>{upperItem}</li>;
              })}
            </ul>
          </div>
          <h3 id="contact">Contact Me</h3>
          <FormContact />
        </div>
      </div>
      {/* <div className="header"></div>
  <div className="left">
    <h2>Name</h2>
    <button>Contact</button>
    <div className="ways"></div>
  </div>
  <div className="right">
    <div className="about"></div>
    <div className="sizes"></div>
  <div className="contact"></div>
  </div> */}
    </div>
  );
};
export default CoachDetailContent;
