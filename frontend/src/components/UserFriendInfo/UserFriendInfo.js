import React from 'react'
import './UserFriendInfoPage.css'
import UserImg from './UserFriendImg'
import UserData from './UserFriendData'
import { Link } from 'react-router-dom'

const UserFriendInfo = () => {
  return (
    <>
      <div className='userInfoPagef container-fluid'>
        <div className="row profilef"> <span className="col-11 prof">Profile</span> <Link to="/chat-page" className='close col-1'> <span ><i className="fa-solid fa-circle-xmark"></i></span> </Link> </div>
        <div className="row userfieldf">
          <div className="col-5"> <UserImg /> </div>
          <div className="col-7"> <UserData /> </div>
        </div>
      </div>
    </>
  )
}

export default UserFriendInfo
