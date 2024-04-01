import React, { useEffect, useState } from 'react'
import Search from './Search'
import Chats from './Chats'
import { api } from '../../api/api';

const ShowSearch = ({setSelectedPerson}) => {
    const [searchValue, setSearchValue] = useState('');
    const [userInfo,setUserInfo] = useState([]);

    useEffect(()=>{
      if(searchValue.length>2){
        fetch(api.SEARCH_USER+"?query="+searchValue,{
          
          credentials:"include"
        })
        .then((res)=>{
          return res.json()
        })
        .then((res)=>{
          console.log(res);
          if(res.success){
            setUserInfo(res.data)
          }
        })
        .catch((err)=>{
          console.log(err);
          alert(err)
        })
      }else if(searchValue.length==0){
        setUserInfo([]);
      }
    },[searchValue])
  return (
    <>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} setUserInfo={setUserInfo}></Search> 
        <Chats userInfo={userInfo}  setSelectedPerson={setSelectedPerson}></Chats>  
    </>
  )
}

export default ShowSearch