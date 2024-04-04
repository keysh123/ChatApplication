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
// import React from 'react';
// import Message from './Message';

// const Messages = ({ messages, currentUser }) => {
//   return (
//     <div className='messages'>
//       {messages.map((message, index) => {
//         // Determine if the message is from the current user
//         const isOwner = message.sender === currentUser.username;
//         console.log(messages+"HIII");
//         return (
         
//           <Message  message={message} isOwner={isOwner} />
//         );
//       })}
//     </div>
//   );
// };

// export default Messages;


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

// import React, { useContext, useEffect } from 'react';
// import { ChatContext1 } from '../../context/ChatProvider' // Import ChatContext
// import Message from './Message';

// const Messages = ({ currentUser }) => {
//   // const { chats, loading, getChats } = useContext(ChatContext);
//   const { chats, loading, getChats } = useContext(ChatContext1);
//   // // Fetch messages when component mounts
//   // useEffect(() => {
//   //   const chatRoomId = '1'; // Set your chat room ID here
//   //   getChats(chatRoomId);
//   // }, [getChats]); // Ensure this effect runs only once when the component mounts

//   return (
//     <div className='messages'>
//       {loading ? (
//         <p>Loading messages...</p>
//       ) : (
//         chats.map((message, index) => {
//           // Determine if the message is from the current user
//           const isOwner = message.sender === currentUser.username;

//           return (
//             <Message key={index} message={message} isOwner={isOwner} />
//           );
//         })
//       )}
      
      
   
//     </div>
//   );
// };

// export default Messages;
import React, { useContext } from 'react';
import { ChatContext1 } from '../../context/ChatProvider';
import Message from './Message';

const Messages = ({ currentUser }) => {
  const { chats, loading } = useContext(ChatContext1);

  return (
    <div className='messages'>
      {loading ? (
        <p>Loading messages...</p>
      ) : (
        chats.map((message, index) => {
          // Determine if the message is from the current user
          const isOwner = message.sender === currentUser;

          return (
            // console.log()
            <Message key={index} message={message} isOwner={isOwner} />
            // <div>{message.text}</div>
          );
        })
      )}
    </div>
  );
};

export default Messages;
