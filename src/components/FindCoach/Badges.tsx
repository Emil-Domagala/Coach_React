import classes from './Badges.module.scss'

const Badges =(props:{badge:string})=>{
    const {badge}=props
    const userBadge = badge[0].toLocaleUpperCase() + badge.slice(1);
    return (
      <div className={`${classes.badge} ${classes[badge]}`}>
        <p>{userBadge}</p>
      </div>
    );
}

export default Badges