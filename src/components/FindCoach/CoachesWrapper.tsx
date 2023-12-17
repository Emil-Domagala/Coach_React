import CoachCard from './CoachCard';
import classes from './CoachesWrapper.module.scss';
import useHTTPCoach from '../../hooks/use-http-coach';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const DUMMY_DATA = [
  {
    img: 'https://t3.ftcdn.net/jpg/02/10/55/60/360_F_210556027_pNmg4EUFwrn2W25SDdWayPakVIztTSe8.jpg',
    name: 'Emil',
    lastname: 'Domagała',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque labore cumque at, sequi eos officiis explicabo tempore porro voluptatibus nam.',
    price: 20,
    badges: ['big', 'medium', 'small'],
    id: 'c1',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/02/10/55/60/360_F_210556027_pNmg4EUFwrn2W25SDdWayPakVIztTSe8.jpg',
    name: 'Emil',
    lastname: 'Domagała',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque labore cumque at, sequi eos officiis explicabo tempore porro voluptatibus nam.',
    price: 20,
    badges: ['big', 'medium', 'small'],
    id: 'c2',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/02/10/55/60/360_F_210556027_pNmg4EUFwrn2W25SDdWayPakVIztTSe8.jpg',
    name: 'Emil',
    lastname: 'Domagała',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque labore cumque at, sequi eos officiis explicabo tempore porro voluptatibus nam. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 20,
    badges: ['big', 'medium', 'small'],
    id: 'c3',
  },
];

const CoachesWrapper = () => {
  const { loadCoaches } = useHTTPCoach();
  const coaches = useSelector((state: any) => state.coaches);

  useEffect(() => {
    // loadCoaches();
  }, []);
  // console.log(coaches);

  return (
    <div className={`container`}>
      <div className={classes.wrapper}>
        {/* {coaches.map(
          (coach:{}) =>
            coach && (
              <CoachCard
                key={coach.id}
                userImg={coach.img}
                name={user.name}
                lastname={user.lastname}
                description={user.description}
                price={user.price}
                badges={user.badges}
                id={user.id}
                
                          key={coach.coachId}
                          id={coach.coachId}
          name={coach.coachName}
          lastname={coach.coachLastname} 
          price={coach.coachPrice}
          coachImg={coach.coachUrl}
          description={{coach.coachDesc}
          badges={coach.coachWays} 
          size={coach.coachSize} 
              ></CoachCard>
            ),
        )} */}
      </div>
    </div>
  );
};

export default CoachesWrapper;
