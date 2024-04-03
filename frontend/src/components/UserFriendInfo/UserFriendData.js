import React from 'react'
import './UserFriendInfoPage.css'

const UserFriendData = () => {
    return (
        <>
            <div className='userdataboxf'>
                <form action="" className='uiformf'>
                    <div className="uridivf">
                        <div className='uiuname uirf'>User Name : <input type='text' disabled></input></div>
                        <div className='uimail uirf'>Mail : <input type='email' disabled></input></div>
                        <div className='uiabout uirf'>About : <input type='text' disabled></input></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserFriendData
