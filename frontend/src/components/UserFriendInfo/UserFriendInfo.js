import React from 'react'
import './UserFriendInfoPage.css'
import UserImg from './UserFriendImg'
import UserData from './UserFriendData'

const UserFriendInfo = () => {
  return (
    <>
      <div className='userInfoPagef container-fluid'>
        <div className="row profilef">Profile</div>
        <div className="row userfieldf">
          <div className="col-5"> <UserImg /> </div>
          <div className="col-7"> <UserData/> </div>
        </div>
      </div>
    </>
  )
}

export default UserFriendInfo
