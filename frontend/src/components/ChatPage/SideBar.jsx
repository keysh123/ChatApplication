import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import ShowSearch from './ShowSearch'
import { ChatRoomContext } from '../../context/ChatRoomContext'
import ChatRooms from './ChatRooms'

const SideBar = ({setSelectedPerson,setShowChat,setStartConversation,setShowStart}) => {

  return (
    <div className='sidebar'>
      <Navbar/>
      <ShowSearch setSelectedPerson={setSelectedPerson} setShowChat={setShowChat} setStartConversation={setStartConversation} setShowStart={setShowStart}/>
      <ChatRooms setShowChat={setShowChat} setStartConversation={setStartConversation} setShowStart={setShowStart}></ChatRooms>  
    </div>
  )
}

export default SideBar
