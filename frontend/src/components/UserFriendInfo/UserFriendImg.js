import React,{useContext} from 'react'
import './UserFriendInfoPage.css'
import { ChatContext } from '../../context/ChatContext';
const UserFriendImg = () => {
  const {chatUser} = useContext(ChatContext);
  // console.log(chatUser.profileImg.url)
  return (
    <>
    <div className='userimgBoxf'>
        <img src={chatUser?.user?.profileImg?.url} alt="" className='userimgf'/>
    </div>
    </>
  )
}

export default UserFriendImg
