import React from 'react'
import './UserInfoPage.css'
import UserImg from './UserImg'
import UserData from './UserData'

const UserInfo = () => {
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

export default UserInfo
