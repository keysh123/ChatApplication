// import React from 'react'

// const Message = () => {
//   return (
//     <div className='message owner '>
//       <div className="messageInfo">
//         <img src="" alt="" />
//         <span>just now</span>
//       </div>
//       <div className="messageContent">
//         <p>Hello</p>
//       </div>
//     </div>
//   )
// }

// export default Message
import React from 'react';

const Message = ({ isUser }) => {
  const messageClass = isUser ? 'message owner' : 'message';

  return (
    <div className={messageClass}>
      <div className="messageInfo">
        <img src="" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
      </div>
    </div>
  );
};

export default Message;

