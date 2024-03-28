import React from 'react'
import './ChatPage.css'
import img1 from '../img/user2.png'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img className='uimgs' src={img1} alt="" />
        <div className="userChatInfo">
          <span>User</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img className='uimgs' src={img1} alt="" />
        <div className="userChatInfo">
          <span>User</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img className='uimgs' src={img1} alt="" />
        <div className="userChatInfo">
          <span>User</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
