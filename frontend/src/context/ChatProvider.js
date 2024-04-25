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
  const { send,setFunc } = useContext(WSContext);
  const { addChat, getChatsDB } = useContext(DBContext);

  const [isSubscribed, setIsSubscribed] = useState(false);
  const { stompClient } = useContext(WSContext);
  const {changedChatRooms,setChangedChatRooms}= useContext(ChatRoomContext);
  const [reRender, setReRender] = useState(false);

  console.log(chats + "}}}}}}}}}}}}}}}}}}]");

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

  const getChats = async (chatRoomId,id) => {
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

  const addChatObj = (obj) => {};

  useEffect(() => {
    if(user){
      if (stompClient) {
        stompClient.connect(
          {},
          function onConnected(e) {
            console.log("Connected to WebSocket server-------------------");
            stompClient.subscribe(
              `/user/${user.username}/queue/message`,
              async function (message) {
                let obj = JSON.parse(message.body);
                // console.log(obj);
                // 2024,4,26,3,20,51,741762400

                const year = obj.time[0];
                const month = String(obj.time[1]).padStart(2, "0");
                const day = String(obj.time[2]).padStart(2, "0");
                const hours = String(obj.time[3]).padStart(2, "0");
                const minutes = String(obj.time[4]).padStart(2, "0");
                const seconds = String(obj.time[5]).padStart(2, "0");
                const milliseconds = String(obj.time[6]).padStart(
                  3,
                  "0"
                );

                const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;

                console.log(formattedDate);
                obj.time = formattedDate;
                // if(obj.receiver!=username){
                //   const component = <Message isOwner={false} message={obj}/>
                //   console.log("hello"+component);
                //   const containerNode = document.createElement('div');
                //   ReactDOM.render(component, containerNode);
                //   messagesRef.current.appendChild(containerNode);
                console.log("0000000000000000");
                // }
                console.log(chatUser);
                console.log(obj);
                console.log("0000000000000000");
                console.log(
                  localStorage.getItem("currentChatRoomId") +
                    "||||||||||||||||||||"
                );
                await addChat(obj);
                if (
                  parseInt(localStorage.getItem("currentChatRoomId")) ===
                  obj.chatRoomId
                ) {
                  await getChats(obj.chatRoomId);
                  setChangedChatRooms(obj.chatId);
                }
                // Process the received message
              }
            );
          },
          function onError(error) {
            console.error("WebSocket error:", error);
          }
        );
      }
    }
      console.log(getChats,123456789);
      // setFunc(getChats);
    
  }, [user]);

  useEffect(() => {
    console.log("orip");
    if (chatUser) {
      console.log("kkkkkkk1");
      if (chatUser.chatRoomId) {
        console.log("kkkkkkk2");
        getChats(chatUser.chatRoomId)
          .then((data) => {
            console.log(data + "897");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    console.log(
      "Chats length:---------------------------------use",
      chats?.length
    );
  }, [chatUser]);

  useEffect(() => {
    console.log("Chats room:", no);
  }, [no]);

  // const getroomno = async (s, r) => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch(
  //       `http://localhost:4000/api/v1/chat-room/room/both/${s}/${r}`,
  //       {
  //         credentials: "include",
  //       }
  //     );
  //     if (res.ok) {
  //       const data = await res.json();
  //       // setChats(data.chatData); // Set chats data
  //       setno(data.chatRoomId);
  //       // console.log("setted",chats.length);
  //     } else {
  //       // Handle error response
  //       console.log("Failed to fetch chats");
  //     }
  //   } catch (error) {
  //     // Handle fetch error
  //     console.error("Error fetching chats:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
        setChatUser,
        chatUser,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
