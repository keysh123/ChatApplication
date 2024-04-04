import React, { createContext, useState, useContext } from "react";
// import { api } from './api'; 
// Create a context for managing room creation
export const CreateRoomContext = createContext();

export const useCreateRoom = () => {
  return useContext(CreateRoomContext);
};

const CreateRoomProvider = ({ children }) => {
  const [room, setRoom] = useState(null);

  const createRoom = async (roomData) => {
    try {
      // Send a POST request to create a chat room
      const res = await fetch('http://localhost:4000/api/v1/chat-room', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(roomData),
      });

      const data = await res.json();

      if (res.ok) {
        // Update the room state if the room creation is successful
        setRoom(data.room);
        console.log("Room created:", data.room);
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
