import React, { useContext } from 'react'
import { ChatRoomContext } from '../../context/ChatRoomContext'
import ChatRoom from './ChatRoom';

const ChatRooms = () => {
    const {chatRoomData} = useContext(ChatRoomContext);
  return (
    <div className='chat-room'>
        {
            chatRoomData?.map((chatRoom)=>{
                return (
                    <ChatRoom chatRoom={chatRoom} key={chatRoom.chatRoomId}></ChatRoom>
                )
            })
        }
    </div>
  )
}

export default ChatRooms