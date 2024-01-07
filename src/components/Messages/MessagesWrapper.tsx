// import { loadMessages } from '../../pages/Messages';
import Message from './Message';
import classes from './MessagesWrapper.module.scss';

const MessagesWrapper = (props: { loadMessages: any }) => {


  const loadedMessages = Object.keys(props.loadMessages).map((key) => {
    return props.loadMessages[key];
  });

  return (

      <div className="container">
        <h2 className={classes.title}>messages</h2>
        {loadedMessages.map((messageData) => {
          return <Message key={messageData.messageId} message={messageData} />;
        })}
      </div>

  );
};
export default MessagesWrapper;
