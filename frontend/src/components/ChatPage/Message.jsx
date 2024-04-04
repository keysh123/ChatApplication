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
// import React from 'react';

// const Message = ({ isUser },{message}) => {
//   const messageClass = isUser ? 'message owner' : 'message';

//   return (
//     <div className={messageClass}>
//       <div className="messageInfo">
//         <img src="" alt="" />
//         <span>just now</span>
//       </div>
//       <div className="messageContent">
//         <p>{message}</p>
//       </div>
//     </div>
//   );
// };

// export default Message;

import React from 'react';

const Message = ({ isOwner, message }) => {
  const messageClass = isOwner ? 'message owner' : 'message';

  return (
    // // <div className={messageClass}>
    //   <div className="messageInfo">
    //     {/* <img src={message.sender.profileImg.url} alt={message.sender.username} /> */}
    //     <span>{message.sentAt}</span> 
    //   </div>
    //   <div className="messageContent">
    //     <p>{message.content}</p> {/* Assuming `content` contains the message text */}
    //   </div>
    // // </div>
    <div className={messageClass}>
        <div className="messageInfo">
          <img src="" alt="" />
           {/* <span>{message.time}</span> */}
           {/* <div className='message'> */}
  <span>{new Date(message.time).toLocaleDateString()}</span><br />
  <span style={  {'margin-top': '-26px'}}>{new Date(message.time).toLocaleTimeString()}</span>
{/* </div> */}

       </div>
        <div className="messageContent">
          <p>{message.text}</p>
        </div>
        </div>
  );
};

export default Message;
