import React, { useContext } from "react";
import { ChatRoomContext } from "../../context/ChatRoomContext";
import ChatRoom from "./ChatRoom";

const ChatRooms = ({ setShowChat, setStartConversation, setShowStart }) => {
  const { chatRoomData } = useContext(ChatRoomContext);
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
