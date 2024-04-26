import React, { createContext, useState, useContext } from "react";
import { DBContext } from "./DBContext";
import { ChatContext } from "./ChatProvider";
import { AuthContext } from "./AuthContext";
import { ChatRoomContext } from "./ChatRoomContext";
// import { api } from './api'; 
// Create a context for managing room creation
export const CreateRoomContext = createContext();

export const useCreateRoom = () => {
  return useContext(CreateRoomContext);
};

const CreateRoomProvider = ({ children }) => {
  const [room, setRoom] = useState(null);
  const {addRooms} = useContext(DBContext); 
  const {setChatUser} = useContext(ChatContext);
  const {setChangedChatRooms} = useContext(ChatRoomContext);
  const {user} = useContext(AuthContext);
  const createRoom = async (user2) => {
    try {
      console.log(user2);
      // Send a POST request to create a chat room
      const res = await fetch('http://localhost:4000/api/v1/chat-room', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          user1:user.username,
          user2:user2.username
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Update the room state if the room creation is successful
        console.log(data.data);
        // data.data.latestChatTime = new Date().now();
        data.data.countUnread = 0;
        await addRooms([data.data]);
        setChatUser(data.data);
        setChangedChatRooms(data.data.chatRoomId);
        
        return true;
      } else {
        console.error("Error creating room:", data.message);
        return false;
      }
    } catch (error) {
      console.error("Error creating room:", error);
      return false;
    }
  };

  // Provide the createRoom function and room state to children components
  return (
    <CreateRoomContext.Provider value={{ createRoom, room }}>
      {children}
    </CreateRoomContext.Provider>
  );
};

export default CreateRoomProvider;
