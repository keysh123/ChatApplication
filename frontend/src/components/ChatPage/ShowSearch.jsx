import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import Chats from './Chats'
import { api } from '../../api/api';
import ChatRoomProvider from '../../context/ChatRoomProvider';
import { ChatRoomContext } from '../../context/ChatRoomContext';

const ShowSearch = ({setSelectedPerson}) => {
    const [searchValue, setSearchValue] = useState('');

    const {resUsers,searchUsers} = useContext(ChatRoomContext);

    useEffect(()=>{
      if(searchValue.length>2){
        searchUsers(searchValue);
      }
    },[searchValue])
    
  return (
    <>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>
        {
          <Chats userInfo={resUsers} setSelectedPerson={setSelectedPerson}></Chats>  
        } 
    </>
  )
}

export default ShowSearch