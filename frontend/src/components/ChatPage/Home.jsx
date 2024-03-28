import React from 'react'
import './ChatPage.css'
import SideBar from './SideBar'
import Chat from './Chat'

const Home = () => {
  return (
    <div className='home'>
      <div className="containerfluid ">
        <SideBar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home