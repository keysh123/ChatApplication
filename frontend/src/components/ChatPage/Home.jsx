import React, { useState } from "react";
import "./ChatPage.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import ChatRoomProvider from "../../context/ChatRoomProvider";
import ChatContextProvider from "../../context/ChatContextProvider";

const Home = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <ChatContextProvider>
      <ChatRoomProvider>
        <div className="home">
          <div className="containerfluid ">
            <SideBar setSelectedPerson={setSelectedPerson} />
            <Chat selectedPerson={selectedPerson} />
          </div>
        </div>
      </ChatRoomProvider>
    </ChatContextProvider>
  );
};

export default Home;
