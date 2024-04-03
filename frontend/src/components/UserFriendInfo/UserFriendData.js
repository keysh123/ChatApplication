import React from 'react'
import './UserFriendInfoPage.css'

const UserFriendData = () => {
    return (
        <>
            <div className='userdatabox'>
                <form action="" className='uiform'>
                    <div className="uridiv">
                        <div className='uiuname uir'>User Name : <input type='text'></input></div>
                        <div className='uimail uir'>Mail : <input type='email' disabled></input></div>
                        <div className='uiabout uir'>About : <input type='text'></input></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserFriendData
