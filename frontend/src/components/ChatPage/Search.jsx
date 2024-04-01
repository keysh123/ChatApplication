import React, { useContext, useEffect, useState } from 'react';
import './ChatPage.css';
import { ChatRoomContext } from '../../context/ChatRoomContext';
const SEARCH_USER = "http://localhost:4000/api/v1/user/search";

const Search = ({searchValue, setSearchValue}) => {
  // const [searchValue, setSearchValue] = useState('');

  // const {searchUsers} = useContext(ChatRoomContext);

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);  
    // searchUsers(searchValue);
  };

  // useEffect(()=>{
  //   if(searchValue.length>2){
  //     console.log("seatch Val"+searchValue);
  //     searchUsers(searchValue);
  //   }
  // },[searchValue])


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Here you can use the searchValue state for further processing
    console.log('Search value:', searchValue);
  };

  return (
    <div className='search'>
      <form className="searchForm" onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="Find a user" 
          value={searchValue} 
          onChange={handleSearchChange} 
        />
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
};

export default Search;
