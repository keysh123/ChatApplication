import React, { useContext, useEffect } from "react";
import { ChatRoomContext } from "../../context/ChatRoomContext";
import ChatRoom from "./ChatRoom";

const ChatRooms = ({ setShowChat, setStartConversation, setShowStart }) => {
  const { chatRoomData } = useContext(ChatRoomContext);
  useEffect(()=>{
    console.log(chatRoomData);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
  }
  ,[chatRoomData])
  return (
    <div className="chat-room">
      {chatRoomData?.map((chatRoom) => {
        return (
          <ChatRoom
            chatRoom={chatRoom}
            key={chatRoom.chatRoomId}
            setShowChat={setShowChat}
            setStartConversation={setStartConversation}
            setShowStart={setShowStart}
          ></ChatRoom>
        );
      })}
    </div>
  );
};

export default ChatRooms;
