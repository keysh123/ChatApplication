import React, { useContext, useEffect, useRef, useState } from "react";
import { api } from "../api/api";
import { WSContext } from "./WSContext";
import { DBContext } from "./DBContext";
import { AuthContext } from "./AuthContext";
import ReactDOM from "react-dom/client";
import Message from "../components/ChatPage/Message";

const WSContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const messagesRef = useRef(null);
  const [wsObject, setWsObject] = useState({
    socket: null,
    stompClient: null,
  });

  const init = (username) => {
    if (!wsObject.socket && !wsObject.stompClient) {
      let socket = new window.SockJS("http://localhost:4000/ws");
      let stompClient = window.Stomp.over(socket);
      stompClient.connect(
        {},
        function onConnected() {
          console.log("Connected to WebSocket server-------------------");
        },
        function onError(error) {
          console.error("WebSocket error:", error);
        }
      );

      setWsObject({ socket, stompClient });
    }
  };

  function destroy() {
    if(wsObject.socket && wsObject.stompClient){
      wsObject?.stompClient?.disconnect();
    }
  }

  useEffect(() => {
    if(user){
      init();
    }

    return () => {
      destroy();
      // setWsObject({
      //   socket: null,
      //   stompClient: null,
      // })
    };
  }, [user]);

  //   const [isConnected, setIsConnected] = useState(false);

  //   useEffect(() => {
  //     const newSocket = new window.SockJS("http://localhost:4000/ws");
  //     const newStompClient = window.Stomp.over(newSocket);
  //     newStompClient.connect(
  //       {},
  //       function onConnected() {
  //         console.log("Connected to WebSocket server");

  //         if (user != null) {
  //           newStompClient.subscribe(
  //             `/user/${user.username}/queue/message`,
  //             async function (message) {
  //               let obj = JSON.parse(message.body);
  //               console.log("Received message:", obj);
  //               await addChat(obj);
  //               // Process the received message
  //             }
  //           );
  //         }
  //       },
  //       onError
  //     );
  //     setStompClient(newStompClient);
  //     setSocket(newSocket);

  //     return () => {
  //       if (stompClient) {
  //         stompClient.disconnect();
  //       }
  //     };
  //   }, []);

  //   function onConnected() {
  //     console.log("Connected to WebSocket server");
  //     setIsConnected(true);

  //     if (user != null) {
  //       stompClient.subscribe(
  //         `/user/${user.username}/queue/message`,
  //         async function (message) {
  //           let obj = JSON.parse(message.body);
  //           console.log("Received message:", obj);
  //           await addChat(obj);
  //           // Process the received message
  //         }
  //       );
  //     }
  //   }

  const send = (obj) => {
    wsObject?.stompClient?.send("/app/chat", {}, JSON.stringify(obj));
  };

  return (
    <WSContext.Provider value={{ wsObject, send, init, messagesRef }}>
      {children}
    </WSContext.Provider>
  );
};

export default WSContextProvider;
