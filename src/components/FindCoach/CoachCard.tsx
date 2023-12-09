import classes from './CoachCard.module.scss';
import Badges from './Badges';
import { Link } from 'react-router-dom';

const CoachCard = (props: {
  userImg: string;
  name: String;
  lastname: String;
  description: String;
  price: number;
  badges: string[];
  id:string
}) => {
  const { userImg, name, lastname, description, price, badges,id } = props;

  const userName = name[0].toLocaleUpperCase() + name.slice(1);
  const userLastname = lastname[0].toLocaleUpperCase() + lastname.slice(1);
  const userFullName = userName + ' ' + userLastname;

  return (
    <Link to={`${id}`} className={classes.link}>
      <div className={classes.card}>
        <div className={classes.hero}>
          <img src={userImg} alt="" />
        </div>
        <div className={classes.bottom}>
          <div className={classes.content}>
            <h3>{userFullName}</h3>
            <div className={classes.badges}>
              {badges.map(
                (badge) => badge && <Badges key={badge} badge={badge} />,
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
