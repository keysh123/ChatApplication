import React, { useState } from "react";
import "./ChatPage.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import ChatRoomProvider from "../../context/ChatRoomProvider";
import ChatContextProvider from "../../context/ChatContextProvider";
import { ChatProvider } from "../../context/ChatProvider";
import Start from "./Start";
import StartConversation from "./StartConversation";
import CreateRoomProvider from "../../context/CreateRoom";
const Home = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

    const [showChat, setShowChat] = useState(false);
    const [startConversation, setStartConversation] = useState(false);
    const [showStart, setShowStart] = useState(true); // Initially show the Start component
  

  return (
    <ChatContextProvider>
      <ChatRoomProvider>
        <ChatProvider>
        <div className="home">
          <div className="containerfluid ">
            <SideBar setSelectedPerson={setSelectedPerson} setShowChat={setShowChat} setStartConversation={setStartConversation} setShowStart={setShowStart} />
            {showStart && <Start setShowChat={setShowChat} setstartConversation={setStartConversation} setShowStart={setShowStart}/>}
      
      {/* Conditionally render the Chat component */}
      {showChat && <Chat selectedPerson={selectedPerson} setShowChat={setShowChat} setstartConversation={setStartConversation} setShowStart={setShowStart}/>}
      <CreateRoomProvider>
      {/* Always render the StartConversation component */}
      {startConversation && <StartConversation selectedPerson={selectedPerson} setShowChat={setShowChat} setStartConversation={setStartConversation} setShowStart={setShowStart} />}
      </CreateRoomProvider>
         </div>
        </div>
        </ChatProvider>
      </ChatRoomProvider>
    </ChatContextProvider>
  );
};

export default Home;
