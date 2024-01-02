import CoachCard from './CoachCard';
import classes from './CoachesWrapper.module.scss';

import { useSelector } from 'react-redux';



const CoachesWrapper = () => {
 
  const filtredCoaches = useSelector(
    (state: any) => state.coaches.filtredCoaches,
  );

  const display =
    filtredCoaches.length === 0 ? (
      <p>im sorry no coaches yet</p>
    ) : (
      filtredCoaches.map(
        (coach: any) =>
          coach && (
            <CoachCard
              key={coach.coachId}
              id={coach.coachId}
              name={coach.coachName}
              lastname={coach.coachLastname}
              price={coach.coachPrice}
              coachImg={coach.coachUrl}
              description={coach.coachDesc}
              badges={coach.coachSize}
            ></CoachCard>
          ),
      )
    );

  return (
    <>
      <div className={`container`}>
        <div className={classes.wrapper}>{display}</div>
      </div>
    </>
  );
};

export default CoachesWrapper;

