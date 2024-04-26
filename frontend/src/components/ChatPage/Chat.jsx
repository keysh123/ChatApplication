// import React from 'react'
// import cam from '../img/cam.png'
// import add from '../img/add.png'
// import more from '../img/more.png'
// import './ChatPage.css'
// import Messages from './Messages'
// import Input from './Input'
// const Chat = () => {
//   return (
//     <>
//     <div className='chat'>
//       <div className="chatInfo">
//         <span>User Name</span>
//         <div className="chatIcons">
//           <img src={cam} alt="" />
//           <img src={add} alt="" />
//           <img src={more} alt="" />
//         </div>

//       </div>
//       <Messages />
//       <Input/>
//     </div>

//     </>
//   )
// }

// export default Chat
import React, { useState, useEffect, useContext } from 'react';
import cam from '../img/cam.png';
import add from '../img/add.png';
import more from '../img/more.png';
import './ChatPage.css';
import Messages from './Messages';
import Input from './Input';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatProvider';
import { Link } from 'react-router-dom'; 
import FileDiv from './FileDiv';
import Message from './Message';

const Chat = ({ selectedPerson }) => {
  const [messages, setMessages] = useState([]);

  const {chatUser} = useContext(ChatContext);
  const {user} = useContext(AuthContext);
  const addMessage=(message)=>{
    const component = <Message message={message} isOwner={true}/>
  }

  // useEffect(() => {
  //   // Fetch messages data from your backend API
  //   fetch('http://localhost:4000/chat-room/chat/'+1) // Adjust URL based on your API endpoint
  //     .then(response => response.json())
  //     .then(data => setMessages(data))
      
  //     .catch(error => console.error('Error fetching messages:', error));
  //     console.log("HIOI")
  // }, []);
 
// console.log("fcghjk"+AuthContext.user)
// console.log(user?.username+"hiiii123")
  return (
   
    <div className='chat'>
      <div className="chatInfo">
        {/* <ChatContext> */}
        <Link to="/user-friend-info" className='unamelink'>
          {/* <span className='chatUserName'>{ chatUser?.username}</span> */}
          <span className='chatUserName'>{chatUser?.user?.username || "User"}</span>
        </Link>
        {/* </ChatContext> */}
        {/* <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        
        </div> */}
      </div>
      {/* {AuthContext.user} */}
      <Messages currentUser={user?.username} selectedPerson={chatUser?.user?.username} />
      <Input />
    </div>

  );
};

export default Chat;
