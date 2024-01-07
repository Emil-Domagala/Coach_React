import classes from './Messages.module.scss';
import MailIcon from '../../icons/Mail';
import PhoneIcon from '../../icons/Phone';

const Message = (props: any) => {
  console.log(props);
  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        <h3>{props.message.senderName}</h3>
        <div className={classes['info__contact']}>
          <a
            href={`mailto:${props.message.senderEmail}`}
            className={classes['item-wrapper']}
          >
            <div className={classes.icon}>
              <MailIcon />
            </div>
            <p>{props.message.senderEmail}</p>
          </a>
          <a
            href={`tel:${props.message.senderPhone}`}
            className={classes['item-wrapper']}
          >
            <div className={classes.icon}>
              <PhoneIcon />
            </div>
            <p>{props.message.senderPhone}</p>
          </a>
        </div>
      </div>
      <div className={classes.message}>
        <p>{props.message.message}</p>
      </div>
    </div>
  );
};

export default Message;
