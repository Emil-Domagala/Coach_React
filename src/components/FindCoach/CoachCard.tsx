import classes from './CoachCard.module.scss';
import Badges from './Badges';
import { Link } from 'react-router-dom';

const CoachCard = (props: {
  coachImg: string;
  name: String;
  lastname: String;
  description: String;
  price: number;
  badges: any;
  id: string;
}) => {
  const { coachImg, name, lastname, description, price, badges, id } = props;

  const coachName = name[0].toLocaleUpperCase() + name.slice(1);
  const coachLastname = lastname[0].toLocaleUpperCase() + lastname.slice(1);
  const coachFullName = coachName + ' ' + coachLastname;


const badgesArr: string[] = Object.keys(badges).filter((key) => badges[key]);



  return (
    <Link to={`${id}`} className={classes.link}>
      <div className={classes.card}>
        <div className={classes.hero}>
          <img src={coachImg} alt="" />
        </div>
        <div className={classes.bottom}>
          <div className={classes.content}>
            <h3>{coachFullName}</h3>
            <div className={classes.badges}>
              {badgesArr.map(
                (badge:string) => badge && <Badges key={badge} badge={badge} />,
              )}
            </div>
            <div className={classes.description}>
              <p>{description}</p>
            </div>
          </div>
          <div className={classes.price}>
            <p>
              Price: <span>${price}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoachCard;
