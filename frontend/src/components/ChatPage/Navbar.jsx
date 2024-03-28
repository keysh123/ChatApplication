import React from 'react'
import './ChatPage.css'
import img1 from '../img/user.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ChatApp</span>
      <div className="user">
        <img className='uimg' src={img1} alt="" />
        <span className="uname">User Name</span>
        <button className='ubtn'>logout</button>
      </div>
    </div>
  )
}

export default Navbar
