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

import React, { useContext } from "react";
import "./ChatPage.css";
import { ChatRoomContext } from "../../context/ChatRoomContext";
import { ChatContext } from "../../context/ChatProvider";
const Chats = ({
  setSelectedPerson,
  userInfo,
  setShowChat,
  setStartConversation,
  setShowStart,
}) => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   // Fetch users from the backend API endpoint when the component mounts
  //   fetchUsers();
  // }, []);
  const { chatRoomData } = useContext(ChatRoomContext);
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
  // const {setChatUser} = useContext(ChatContext);
  // const handleClick = (user)=>{
  //   setChatUser(user);

  // }
  const { setChatUser } = useContext(ChatContext);
  const { chats, loading, getChats, getroomno, no } = useContext(ChatContext);
  const getStarted = (user) => {
    let t = 0;
    const chatRoomIds = chatRoomData.map((item) => {
      if (item.user.username === user?.username) {
        console.log("prersent");
        getChats(item.chatRoomId);
        t = 1;
        setStartConversation(false);
        setShowChat(true);
        setShowStart(false);
        // setSelectedPerson(user?.username);
        setChatUser(item);
        return item.chatRoomId;
      }
      return null; // Or handle if username is not available
    });
    if (t == 0) {
      setStartConversation(true);
      setShowChat(false);
      setShowStart(false);
      setSelectedPerson(user);
    }
  };
  return (
    <div className="chats">
      {userInfo?.map((user) => (
        <div
          className="userChat"
          key={user?.username}
          onClick={() => {
            getStarted(user);
          }}
        >
          <img className="uimgs" src={user?.profileImg?.url} alt="" />
          <div className="userChatInfo">
            <span>{user?.username}</span>
            {/* <p>Hello</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
