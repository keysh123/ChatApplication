// ChatContext.js
import React, { createContext, useState, useEffect } from "react";

export const ChatContext1 = createContext();

export const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(false);
  const[no,setno]=useState(null);

   const getChats = async (chatRoomId) => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:4000/chat-room/chat/${chatRoomId}`, {
                credentials: "include",
            });
            if (res.ok) {
                const data = await res.json();
                setChats(data.data); // Set chats data
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
        console.log("Chats length:", chats.length);
    }, [chats]);
    useEffect(() => {
        console.log("Chats room:", no);
    }, [no]);

const getroomno = async (s,r) => {
    setLoading(true);
    try {
        const res = await fetch(`http://localhost:4000/api/v1/chat-room/room/both/${s}/${r}`, {
            credentials: "include",
        });
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
    console.log("Chats length:", chats.length);
}, [chats]);
    return (
        <ChatContext1.Provider value={{ chats, loading, getChats,no,getroomno }}>
            {children}
        </ChatContext1.Provider>
    );
};
