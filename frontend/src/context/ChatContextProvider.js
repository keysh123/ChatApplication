// import React, { useState } from "react";
// import { api } from "../api/api";
// import { ChatContext } from "./ChatContext";

// const ChatContextProvider = ({ children }) => {

//     const [chatUser,setChatUser] = useState({});
//     // const {messages,setMessages} = 

//     const init = ()=>{
//         //subscribe websocket and handle recieved messages
//     }

//     const sendMessage = async (message)=>{
//         if(chatUser!=null){
//             //send message
//         }
//     }




//   return (
//     <ChatContext.Provider value={{chatUser,setChatUser}}>
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export default ChatContextProvider;
import React, { useState, useEffect } from "react";
import { ChatContext } from "./ChatContext";

const ChatContextProvider = ({ children }) => {
    const [chatUser, setChatUserState] = useState(() => {
        // Retrieve chatUser from localStorage if available
        const storedChatUser = localStorage.getItem("chatUser");
        return storedChatUser ? JSON.parse(storedChatUser) : {};
    });

    // Function to update chatUser state and localStorage
    const setChatUser = (newChatUser) => {
        setChatUserState(newChatUser);
        localStorage.setItem("chatUser", JSON.stringify(newChatUser));
    };

    const init = () => {
        //subscribe websocket and handle received messages
    };

    const sendMessage = async (message) => {
        if (chatUser != null) {
            //send message
        }
    };

    // Run init function when component mounts
    useEffect(() => {
        init();
    }, []);

    return (
        <ChatContext.Provider value={{ chatUser, setChatUser, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};

export default ChatContextProvider;
