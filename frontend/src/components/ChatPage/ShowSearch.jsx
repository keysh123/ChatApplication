import React, { useState } from 'react'
import Search from './Search'
import Chats from './Chats'

const ShowSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [userInfo,setUserInfo] = useState([]);
  return (
    <>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} setUserInfo={setUserInfo}></Search> 
        <Chats userInfo={userInfo}></Chats>  
    </>
  )
}

export default ShowSearch