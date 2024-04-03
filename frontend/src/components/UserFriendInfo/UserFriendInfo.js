import React from 'react'
import './UserFriendInfoPage.css'
import UserImg from './UserFriendImg'
import UserData from './UserFriendData'

const UserFriendInfo = () => {
  return (
    <>
      <div className='userInfoPage container-fluid'>
        <div className="row profile">Profile</div>
        <div className="row userfield">
          <div className="col-5"> <UserImg /> </div>
          <div className="col-7"> <UserData/> </div>
        </div>
      </div>
    </>
  )
}

export default UserFriendInfo
