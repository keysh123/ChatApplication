import React from 'react'
import './UserFriendInfoPage.css'
import UserImg from './UserFriendImg'
import UserData from './UserFriendData'
import { Link } from 'react-router-dom'
import { ChatContext } from '../../context/ChatContext'
// import {ChatContextProvider} from '../../context/ChatContextProvider'
import ChatContextProvider from "../../context/ChatContextProvider";
const UserFriendInfo = () => {
  return (
    <>
    <ChatContextProvider>
      <div className='userInfoPagef container-fluid'>
        <div className="row profilef"> <span className="col-11 prof">Profile</span> <Link to="/chat-page" className='close col-1'> <span ><i className="fa-solid fa-circle-xmark"></i></span> </Link> </div>
        <div className="row userfieldf">
          <div className="col-5"> <UserImg /> </div>
          {/* <ChatContext> */}
          <div className="col-7"> <UserData /> </div>
          {/* </ChatContext> */}
        </div>
      </div>
      </ChatContextProvider>
      
    </>
  )
}

export default UserFriendInfo
