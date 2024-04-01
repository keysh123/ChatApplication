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
import { ChatContext } from '../../context/ChatContext';

const Chat = ({selectedPerson}) => {
  const [messages, setMessages] = useState([]);

  const {chatUser} = useContext(ChatContext);

  useEffect(() => {
    // Fetch messages data from your backend API
    fetch('http://localhost:4000/api/v1/messages?uname='+selectedPerson) // Adjust URL based on your API endpoint
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);



  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{chatUser?.username || "User"}</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages messages={messages} />
      <Input />
    </div>
  );
};

export default Chat;
