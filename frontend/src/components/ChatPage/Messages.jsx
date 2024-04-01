// import React from 'react'
// import Message from './Message'
// const Messages = (messages) => {
//   return (
//     <div className='messages'>
//       <Message/>
   
      
//     </div>
//   )
// }
// export default Messages
import React from 'react';
import Message from './Message';

const Messages = ({ messages, currentUser }) => {
  return (
    <div className='messages'>
      {messages.map((message, index) => {
        // Determine if the message is from the current user
        const isOwner = message.sender === currentUser.username;

        return (
          <Message key={index} message={message} isOwner={isOwner} />
        );
      })}
    </div>
  );
};

export default Messages;


// import React from 'react';
// import Message from './Message';

// const Messages = ({ messages }) => {
//   return (
//     <div className='messages'>
//       {messages.map((message, index) => (
//         <Message key={index} message={message} />
//       ))}
//     </div>
//   );
// };

// export default Messages;

