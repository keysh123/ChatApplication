import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { ChatRoomContext } from "./ChatRoomContext";
import ChatRooms from "../components/ChatPage/ChatRooms";
import { DBContext } from "./DBContext";
import { AuthContext } from "./AuthContext";

const ChatRoomProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [chatRoomData, setChatRoomData] = useState(null);
  const [resUsers, setResUsers] = useState(null);
  const { addRooms, getChatRoomsDB } = useContext(DBContext);
  const [changedChatRooms,setChangedChatRooms] = useState("toggle");

  const getChatRooms = async () => {
    // const res = await fetch(api.GET_CHAT_ROOMS, {
    //   credentials: "include",
    // });
    // if (!res.ok) {
    //     throw new Error('Failed to fetch chat rooms');
    // }
    // const obj = await res.json();
    // // Process the chat rooms data
    // const processedRooms = await Promise.all(obj.data.map(async (chatRoom) => {
    //     if (chatRoom.user.profileImg != null) {
    //         const contentRes = await fetch(api.GET_CONTENT + chatRoom.user.profileImg.id, {
    //             credentials: "include",
    //         });
    //         if (!contentRes.ok) {
    //             throw new Error('Failed to fetch profile image');
    //         }
    //         const blob = await contentRes.blob();
    //         const profileImgUrl = URL.createObjectURL(blob);
    //         console.log("Image URL: " + profileImgUrl);
    //         chatRoom.user.profileImg.url = profileImgUrl;
    //     } else {
    //         chatRoom.user.profileImg = {
    //             url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    //         };
    //     }
    //     return chatRoom; // Return the processed chat room
    // }));
    // const arr = processedRooms;
    // await initDB(arr);
  };

  useEffect(() => {
    console.log("Into the wild .....................................hello");
    getChatRoomsDB()
      .then((rooms) => {
        console.log(rooms, "hello");
        setChatRoomData(rooms);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [changedChatRooms]);

  const searchUsers = async (query) => {
    // if(query.length>2){

      const res = await fetch(api.SEARCH_USER + "?query=" + query, {
        credentials: "include",
      });

      const obj = await res.json();
      if (res.ok) {
        // console.log(resUsers+"HIyui");
        setResUsers(obj.data);
        // console.log(res);
        // console.log(obj);
      }
    // }else{
      // setResUsers([]);
    // }
  };

  return (
    <ChatRoomContext.Provider
      value={{
        chatRoomData,
        setChatRoomData,
        // getChatRooms,
        resUsers,
        setResUsers,
        searchUsers,
        setChangedChatRooms,
        changedChatRooms
      }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
};

export default ChatRoomProvider;
