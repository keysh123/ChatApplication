import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const ChatRoom = ({ chatRoom }) => {
    const {setChatUser} = useContext(ChatContext);

    const handleClick = (e)=>{
        setChatUser(chatRoom.user);
    }

  return (
    <div className="userChat" onClick={handleClick}>
      <img className="uimgs" src={chatRoom?.user?.profileImg?.url}  alt={chatRoom?.user?.username}/>
      <div className="userChatInfo">
        <span>{chatRoom?.user?.username}</span>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default ChatRoom;
