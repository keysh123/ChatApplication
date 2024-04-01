import React, { createContext, useState } from "react";
import { api } from "../api/api";
import { ChatDataContext } from "./ChatDataContext";

const ChatDataContextProvider = ({ children }) => {

    


  return (
    <ChatDataContext.Provider value={{}}>
      {children}
    </ChatDataContext.Provider>
  );
};

export default ChatDataContextProvider;
