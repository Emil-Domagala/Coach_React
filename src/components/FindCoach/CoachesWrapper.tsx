import CoachCard from './CoachCard';
import classes from './CoachesWrapper.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useHTTPCoach from '../../hooks/use-http-coach';
import LoadingModal from '../UI/LoadingModal';
import ErrorModal from '../UI/ErrorModal';

const CoachesWrapper = () => {
  const { loadCoaches, hasError, isLoading } = useHTTPCoach();

  useEffect(() => {
    loadCoaches();
  }, []);


  const filtredCoaches = useSelector(
    (state: any) => state.coaches.filtredCoaches,
  );
  const stateOfCoachFinding = useSelector(
    (state: any) => state.coaches.stateOfCoachFinding,
  );

  const display = 
    filtredCoaches.length === 0 ? (
      <div className={classes.info}>
        <p>{stateOfCoachFinding}</p>
      </div>
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
    <div className={`container`}>
      <div className={classes.wrapper}>
        {display}
        {isLoading && <LoadingModal />}
        {hasError && <ErrorModal />}
      </div>
    </div>
  );
};

export default CoachesWrapper;
