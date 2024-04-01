// import React from 'react'
// import './ChatPage.css'
// import img1 from '../img/user2.png'

// const Chats = () => {
//   return (
//     <div className='chats'>
//       <div className="userChat">
//         <img className='uimgs' src={img1} alt="" />
//         <div className="userChatInfo">
//           <span>User</span>
//           <p>Hello</p>
//         </div>
//       </div>
//       <div className="userChat">
//         <img className='uimgs' src={img1} alt="" />
//         <div className="userChatInfo">
//           <span>User</span>
//           <p>Hello</p>
//         </div>
//       </div>
//       <div className="userChat">
//         <img className='uimgs' src={img1} alt="" />
//         <div className="userChatInfo">
//           <span>User</span>
//           <p>Hello</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Chats

import React, { useState, useEffect } from 'react';
import './ChatPage.css';

const Chats = ({userInfo}, {setSelectedPerson}) => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   // Fetch users from the backend API endpoint when the component mounts
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     // Make an HTTP GET request using fetch
  //     const response = await fetch('/api/users'); // Replace '/api/users' with your actual API endpoint
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch users');
  //     }
  //     const data = await response.json();
  //     setUsers(data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  return (
    <div className='chats'>
    {userInfo.map(user => (
      <div className="userChat" key={user?.username} onClick={()=>{
        setSelectedPerson(user?.username);
      }}>
        <img className='uimgs' src={user?.profilePicture} alt="" />
        <div className="userChatInfo">
          <span>{user?.username}</span>
          <p>Hello</p>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Chats;
