import React, { useState } from "react";
import { api } from "../api/api";
import { ChatContext } from "./ChatContext";

const ChatContextProvider = ({ children }) => {

    const [chatUser,setChatUser] = useState(null);
    // const {messages,setMessages} = 

    const init = ()=>{
        //subscribe websocket and handle recieved messages
    }

    const sendMessage = async (message)=>{
        if(chatUser!=null){
            //send message
        }
    }




  return (
    <ChatContext.Provider value={{chatUser,setChatUser}}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
