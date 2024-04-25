// ChatContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { WSContext } from "./WSContext";
import { DBContext } from "./DBContext";
import { ChatRoomContext } from "./ChatRoomContext";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [no, setno] = useState(null);

  const [chatUser, setChatUser] = useState(null);
  const { user } = useContext(AuthContext);
  const { send } = useContext(WSContext);
  const { addChat, getChatsDB } = useContext(DBContext);
  console.log(chats+"}}}}}}}}}}}}}}}}}}]");
  // const {messages,setMessages} =

  const init = () => {
    //subscribe websocket and handle recieved messages
  };

  const sendMessage = async (message) => {
    console.log(user);
    console.log(chatUser);
    if (chatUser != null) {
      let obj = {
        sender: user.username,
        receiver: chatUser.user.username,
        text: message,
        chatRoomId: chatUser.chatRoomId,
      };
      send(obj);
    }
  };

  const getChats = async (chatRoomId) => {
    // setLoading(true);
    try {
      const res = await getChatsDB(chatRoomId);
      // console.log(res+"qqq2534@@@@@@@@@qqqqqqqqqqqq");
      setChats(res);
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching chats:", error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    console.log("orip");
    if(chatUser){
      console.log("kkkkkkk1");
      if(chatUser.chatRoomId){
        console.log("kkkkkkk2");
        getChats(chatUser.chatRoomId).then((data)=>{
          console.log(data+"897");
        }).catch((err)=>{
          console.log(err);
        });

      }
    }
    console.log("Chats length:---------------------------------use", chats?.length);
  }, [chatUser]);

  useEffect(() => {
    console.log("Chats room:", no);
  }, [no]);

  const getroomno = async (s, r) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:4000/api/v1/chat-room/room/both/${s}/${r}`,
        {
          credentials: "include",
        }
      );
      if (res.ok) {
        const data = await res.json();
        // setChats(data.chatData); // Set chats data
        setno(data.chatRoomId);
        // console.log("setted",chats.length);
      } else {
        // Handle error response
        console.log("Failed to fetch chats");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching chats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Chats length:", chats?.length);
  }, [chats]);
  return (
    <ChatContext.Provider
      value={{
        chats,
        loading,
        getChats,
        no,
        getroomno,
        setChatUser,
        chatUser,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
