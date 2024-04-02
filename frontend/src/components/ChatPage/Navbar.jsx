import React, { useState, useEffect } from 'react';
import './ChatPage.css';

const Navbar = () => {
  const [userData, setUserData] = useState({ username: '', profilePicture: '' });

  useEffect(() => {
    // Fetch user data from the backend API endpoint
    fetchUserData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user'); // Replace '/api/user' with your actual API endpoint
      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className='navbar'>
      <span className="logo">ChatNest</span>
      <div className="user">
        <img className='uimg' src={userData.profilePicture} alt="" />
        <span className="uname">{userData.username}</span>
        <button className='ubtn'>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
