import React from 'react'
import Message from './Message'
const Messages = () => {
  return (
    <div className='messages'>
      <Message/>
   
      
    </div>
  )
}

export default Messages

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

