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

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatProvider";
import FileDiv from "./FileDiv";
const Message = ({ isOwner, message }) => {
  const { chatUser } = useContext(ChatContext);
  const { user, signout, setUser } = useContext(AuthContext);
  const messageClass = isOwner ? "message owner" : "message";
  const imageUrl = isOwner
    ? user?.profileImg?.url
    : chatUser?.user?.profileImg?.url;
  console.log(user?.profileImg?.url + "url");
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
    <>
      {message.content!=null ? (
        <FileDiv file={message} isOwner={isOwner} />
      ) : (
        <div className={messageClass}>
          <div className="messageInfo">
            {/* <img src={imageUrl} alt="" /> */}
            {/* <span>{message.time}</span> */}
            {/* <div className='message'> */}
            <span>{new Date(message.time).toLocaleDateString()}</span>
            <br />
            <span style={{ "margin-top": "-26px" }}>
              {new Date(message.time).toLocaleTimeString()}
            </span>
            {/* </div> */}
          </div>
          <div className="messageContent">
            <p>{message.text}</p>
            {/* <p>{message.status}status</p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
