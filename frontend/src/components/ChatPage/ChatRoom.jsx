import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from '../../context/AuthContext';
import { ChatContext1 as ChatContext1 } from '../../context/ChatProvider'
const ChatRoom = ({ chatRoom,setShowChat,setStartConversation,setShowStart} ) => {
    const {setChatUser} = useContext(ChatContext);
    const { chats, loading, getChats,getroomno,no } = useContext(ChatContext1);
    const {user,signout} = useContext(AuthContext);
    const handleClick = (e)=>{
      setShowChat(true);
      setShowStart(false);
      setStartConversation(false);
        setChatUser(chatRoom);
        console.log(chatRoom.chatRoomId);
        console.log(chatRoom);
        console.log(user+"HIII");
        // (async () => {
          // await getChats(chatRoom?.user?.username,user?.username);
        //  getroomno(chatRoom?.user?.username,user?.username);
          
          
         
      // })();
      getChats(chatRoom.chatRoomId);
   
    
      
      console.log(chats.length + "KKK");

    }

  return (
    <div className="userChat" onClick={handleClick}>
      <img className="uimgs" src={chatRoom?.user?.profileImg?.url}  alt={chatRoom?.user?.username}/>
      <div className="userChatInfo">
        <span>{chatRoom?.user?.username}</span>
        {/* <p>Hello</p> */}
      </div>
    </div>
  );
};

export default ChatRoom;
