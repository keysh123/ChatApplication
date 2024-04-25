import React,{useContext} from 'react'
import { CreateRoomContext } from '../../context/CreateRoom'
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatProvider';
export default function StartConversation({selectedPerson,setShowChat,setStartConversation,setShowStart}) {
  const { createRoom } = useContext(CreateRoomContext);
  const {chatUser,setChatUser} = useContext(ChatContext);
  // const { chats, loading, getChats,getroomno,no } = useContext(ChatContext1);
  const {user,signout} = useContext(AuthContext);
  const create_room = () =>{
    
    createRoom({
      "user1" :user?.username,
      "user2":selectedPerson
    })
    console.log("created");
    setShowChat(true);
    setShowStart(false);
    setStartConversation(false);
    setChatUser(selectedPerson);


  }
  return (
    <div className='chat'>
        <button className='btnstart' onClick={create_room}>Get_Started</button>
    </div>
  )
}
