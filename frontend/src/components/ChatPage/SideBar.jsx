import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import ShowSearch from './ShowSearch'

const SideBar = ({setSelectedPerson}) => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <ShowSearch setSelectedPerson={setSelectedPerson}/>
    </div>
  )
}

export default SideBar
