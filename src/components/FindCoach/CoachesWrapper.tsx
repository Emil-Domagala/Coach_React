import CoachCard from './CoachCard';
import classes from './CoachesWrapper.module.scss'

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
  return (
    <div className={`container`}>
      <div className={classes.wrapper}>
        {' '}
        {DUMMY_DATA.map(
          (user) =>
            user && (
              <CoachCard
                key={user.id}
                userImg={user.img}
                name={user.name}
                lastname={user.lastname}
                description={user.description}
                price={user.price}
                badges={user.badges}
                id={user.id}
              ></CoachCard>
            ),
        )}
      </div>
    </div>
  );
};

export default CoachesWrapper;
