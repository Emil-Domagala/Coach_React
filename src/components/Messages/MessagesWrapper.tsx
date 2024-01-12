// import { loadMessages } from '../../pages/Messages';
import Message from './Message';
import classes from './MessagesWrapper.module.scss';

const MessagesWrapper = (props: { loadMessages: any }) => {
  let loadedMessages = [];
  if (props.loadMessages) {
    loadedMessages = Object.keys(props.loadMessages).map((key) => {
      return props.loadMessages[key];
    });
  }

  const display =
    loadedMessages.length === 0 ? (
      <div className={classes.info}>
        <p>You have no message yet</p>
      </div>
    ) : (
      loadedMessages.map((messageData) => {
        return <Message key={messageData.messageId} message={messageData} />;
      })
    );

  return (
    <div className="container">
      <h2 className={classes.title}>messages</h2>
      {display}
    </div>
  );
};
export default MessagesWrapper;
