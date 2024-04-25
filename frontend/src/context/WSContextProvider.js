import React, { useContext, useRef, useState } from "react";
import { api } from "../api/api";
import { WSContext } from "./WSContext";
import { DBContext } from "./DBContext";
import { AuthContext } from "./AuthContext";
import ReactDOM from 'react-dom/client'
import Message from "../components/ChatPage/Message";

const WSContextProvider = ({ children }) => {
  const { addChat } = useContext(DBContext);
  //   const { user } = useContext(AuthContext);
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
          stompClient.subscribe(
            `/user/${username}/queue/message`,
            async function (message) {
              let obj = JSON.parse(message.body);
              const date = new Date(...obj.time);

              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const day = String(date.getDate()).padStart(2, "0");
              const hours = String(date.getHours()).padStart(2, "0");
              const minutes = String(date.getMinutes()).padStart(2, "0");
              const seconds = String(date.getSeconds()).padStart(2, "0");
              const milliseconds = String(date.getMilliseconds()).padStart(
                3,
                "0"
              );

              const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;

              console.log(formattedDate);
              obj.time=formattedDate;
              if(obj.receiver!=username){
                const component = <Message isOwner={false} message={obj}/>
                console.log("hello"+component);
                const containerNode = document.createElement('div');
                ReactDOM.render(component, containerNode);
                messagesRef.current.appendChild(containerNode);
              }
              await addChat(obj);
              // Process the received message
            }
          );
        },
        function onError(error) {
          console.error("WebSocket error:", error);
        }
      );

      setWsObject({ socket, stompClient });
    }
  };

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
    <WSContext.Provider value={{ send, init, messagesRef }}>{children}</WSContext.Provider>
  );
};

export default WSContextProvider;
