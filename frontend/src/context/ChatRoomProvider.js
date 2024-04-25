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
    const rooms = await getChatRoomsDB();
    setChatRoomData(rooms);
  };

  useEffect(() => {
    if (user) {
      console.log("Into the wild .....................................hello");
      getChatRoomsDB()
        .then((rooms) => {
          console.log(rooms,"hello");
          setChatRoomData(rooms);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const searchUsers = async (query) => {
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
      }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
};

export default ChatRoomProvider;
