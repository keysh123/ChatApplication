import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import ShowSearch from './ShowSearch'
import { ChatRoomContext } from '../../context/ChatRoomContext'
import ChatRooms from './ChatRooms'

const SideBar = ({setSelectedPerson,setShowChat,setStartConversation,setShowStart}) => {
  const chatRoomRef = useRef(null);
  return (
    <div className='sidebar'>
      <Navbar/>
      <ShowSearch chatRoomRef={chatRoomRef} setSelectedPerson={setSelectedPerson} setShowChat={setShowChat} setStartConversation={setStartConversation} setShowStart={setShowStart}/>
      {<ChatRooms chatRoomRef={chatRoomRef} setShowChat={setShowChat} setStartConversation={setStartConversation} setShowStart={setShowStart}></ChatRooms> } 
    </div>
  )
}

export default SideBar
