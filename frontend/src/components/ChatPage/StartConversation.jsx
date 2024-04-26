import React, { useContext } from "react";
import { CreateRoomContext } from "../../context/CreateRoom";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatProvider";
export default function StartConversation({
  selectedPerson,
  setShowChat,
  setStartConversation,
  setShowStart,
}) {
  const { createRoom } = useContext(CreateRoomContext);
  const { chatUser, setChatUser } = useContext(ChatContext);
  // const { chats, loading, getChats,getroomno,no } = useContext(ChatContext1);
  const { user, signout } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    createRoom(selectedPerson)
      .then((res) => {
        console.log(res);
        console.log("created");
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=>{
        setShowChat(true);
        setShowStart(false);
        setStartConversation(false);
      });
  };
  return (
    <div className="chat btnstart2div">
      <button
        className="btnstart2 animate__animated animate__fadeInDown"
        onClick={handleClick}
      >
        Start Conversation
      </button>
    </div>
  );
}
