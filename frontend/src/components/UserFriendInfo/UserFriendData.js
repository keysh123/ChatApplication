import React, { useState, useEffect, useContext } from 'react'
import './UserFriendInfoPage.css'
import { ChatContext } from '../../context/ChatContext';
import { AuthContext } from '../../context/AuthContext';
const UserFriendData = () => {
    const {chatUser} = useContext(ChatContext);
    const {user,setUser}=useContext(AuthContext)
    // console.log(chatUser.i?.user?.username)
    console.log(chatUser);
    console.log(JSON.parse(JSON.stringify(chatUser)));
    
    console.log(JSON.stringify(chatUser)+"in friend")

    
    return (
        <>
          
            <div className='userdataboxf'>
                <form action="" className='uiformf'>
                    <div className="uridivf">
                      
                        <div className='uiuname uirf'>User Name : <input type='text' value={chatUser?.user?.username} disabled></input></div>
                        <div className='uimail uirf'>Mail : <input type='email' value={chatUser?.user?.email} disabled></input></div>
                        <div className='uiabout uirf'>About : <input type='text' value={chatUser?.user?.bio} disabled></input></div>
                       
                    </div>
                </form>
            </div>
           
        </>
    )
}

export default UserFriendData
