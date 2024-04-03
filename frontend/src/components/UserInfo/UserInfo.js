import React from 'react'
import './UserInfoPage.css'
import UserImg from './UserImg'
import UserData from './UserData'
import { Link } from 'react-router-dom'

const UserInfo = () => {
  return (
    <>
      <div className='userInfoPage container-fluid'>
        <div className="row profile"> <span className="col-11 prof">Profile</span> <Link to="/chat-page" className='close col-1'> <span ><i className="fa-solid fa-circle-xmark"></i></span> </Link> </div>
        <div className="row userfield">
          <div className="col-5"> <UserImg /> </div>
          <div className="col-7"> <UserData /> </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo
