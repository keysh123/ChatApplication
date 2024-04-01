import React, { useEffect, useState } from 'react';
import './ChatPage.css';
const SEARCH_USER = "http://localhost:4000/api/v1/user/search";
const Search = ({searchValue, setSearchValue, setUserInfo}) => {
  // const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);  
  };

  // useEffect(()=>{
  //   if(searchValue.length>2){
  //     fetch(SEARCH_USER+"?query="+searchValue,{
        
  //       credentials:"include"
  //     })
  //     .then((res)=>{
  //       return res.json()
  //     })
  //     .then((res)=>{
  //       console.log(res);
  //       if(res.success){
  //         setUserInfo(res.data)
  //       }
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //       alert(err)
  //     })
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
