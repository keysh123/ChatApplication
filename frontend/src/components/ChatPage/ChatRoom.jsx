import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { chatRoomData } from "../../context/ChatRoomContext";
import { ChatRoomContext } from "../../context/ChatRoomContext";
import { ChatContext } from "../../context/ChatProvider";
// const {chatRooms,getChatRooms} = useContext(ChatRoomContext);
const ChatRoom = ({
  chatRoom,
  setShowChat,
  setStartConversation,
  setShowStart,
}) => {
  const { setChatUser } = useContext(ChatContext);
  const { chats, loading, getChats, getroomno, no } = useContext(ChatContext);
  const { chatRoomData } = useContext(ChatRoomContext);
  const handleClick = (e) => {
    setShowChat(true);
    setShowStart(false);
    setStartConversation(false);
    localStorage.setItem("currentChatRoomId",chatRoom.chatRoomId+"");
    setChatUser(chatRoom);
    console.log(chatRoom.chatRoomId);
    console.log(chatRoom);
    console.log(chatRoomData + "HIII");

    // (async () => {
    // await getChats(chatRoom?.user?.username,user?.username);
    //  getroomno(chatRoom?.user?.username,user?.username);

    // })()'

    console.log(chats?.length + "KKK");
  };

  return (
    <div className="userChat" onClick={handleClick}>
      <img
        className="uimgs"
        src={chatRoom?.user?.profileImg?.url}
        alt={chatRoom?.user?.username}
      />
      <div className="userChatInfo">
        <span>{chatRoom?.user?.username}</span>
        {/* <p>Hello</p> */}
      </div>
    </div>
  );
};

export default ChatRoom;
