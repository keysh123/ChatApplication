import React, { createContext, useState } from "react";
import { api } from "../api/api";
import { ChatRoomContext } from "./ChatRoomContext";
import ChatRooms from "../components/ChatPage/ChatRooms";

const ChatRoomProvider = ({ children }) => {
    const [chatRoomData,setChatRoomData] = useState(null);
    const [resUsers,setResUsers] = useState(null);

    const getChatRooms = async ()=>{
        const res = await fetch(api.GET_CHAT_ROOMS,{
            credentials:"include"
        });

        const obj = await res.json();
        if(res.ok){
            let cRooms = obj.data.map(async (chatRoom)=>{
                if(chatRoom.user.profileImg!=null){
                  const contentRes = await fetch(api.GET_CONTENT+chatRoom.user.profileImg.id,{
                    credentials:"include"
                  });
                  let blob = await contentRes.blob();
                  let profileImgUrl = URL.createObjectURL(blob);
                  console.log("Image urlllllllllllllllll"+profileImgUrl);
                  chatRoom.user.profileImg.url = profileImgUrl;
                }else{
                  chatRoom.user.profileImg = {url : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"};
                }
            })
            console.log(obj);
            setChatRoomData(obj.data);
            console.log(chatRoomData)
        }
        // console.log(res);
        // console.log(obj);
    }

    const searchUsers = async (query) =>{
      const res = await fetch(api.SEARCH_USER+"?query="+query,{    
        credentials:"include"
      });

      const obj = await res.json();
      if(res.ok){
        // console.log(resUsers+"HIyui");
        setResUsers(obj.data);
        // console.log(res);
        console.log(JSON.stringify(obj)+"in chatroom");
      }
    }



  return (
    <ChatRoomContext.Provider value={{chatRoomData,setChatRoomData,getChatRooms,resUsers,setResUsers,searchUsers}}>
      {children}
    </ChatRoomContext.Provider>
  );
};

export default ChatRoomProvider;
