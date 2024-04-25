import React, { useEffect } from "react";
import { api } from "../api/api";
import { DBContext } from "./DBContext";

const DBProvider = ({ children }) => {
  console.log("he--------------------------------------------");
  const dbName = "my_database";
  let dbPromise = new Promise((resolve, reject) => {
    let request = window.indexedDB.open(dbName, 1);

    request.onerror = function (event) {
      console.log("errcccccccccccccccccccccccc");
      reject(event.target.error);
    };

    request.onsuccess = function (event) {
      console.log("successsssssssssssssssss");
      resolve(event.target.result);
    };

    request.onupgradeneeded = function (event) {
      let db = event.target.result;
      let roomStore = db.createObjectStore("chatRooms", {
        keyPath: "chatRoomId",
      });
      let chatStore = db.createObjectStore("chats", { keyPath: "chatId" });

      chatStore.createIndex("chatRoomId", "chatRoomId", { unique: false });
    };
  });

  // const getChatRooms = async () => {
  //   const res = await fetch(api.GET_CHAT_ROOMS, {
  //     credentials: "include",
  //   });

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch chat rooms");
  //   }

  //   const obj = await res.json();

  //   // Process the chat rooms data
  //   const processedRooms = await Promise.all(
  //     obj.data.map(async (chatRoom) => {
  //       if (chatRoom.user.profileImg != null) {
  //         const contentRes = await fetch(
  //           api.GET_CONTENT + chatRoom.user.profileImg.id,
  //           {
  //             credentials: "include",
  //           }
  //         );
  //         if (!contentRes.ok) {
  //           throw new Error("Failed to fetch profile image");
  //         }
  //         const blob = await contentRes.blob();
  //         const profileImgUrl = URL.createObjectURL(blob);
  //         console.log("Image URL: " + profileImgUrl);
  //         chatRoom.user.profileImg.url = profileImgUrl;
  //       } else {
  //         chatRoom.user.profileImg = {
  //           url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  //         };
  //       }
  //       return chatRoom; // Return the processed chat room
  //     })
  //   );

  //   console.log(processedRooms);
  //   return processedRooms;
  // };

  const _getChatRooms = async () => {
    const res = await fetch(api.GET_CHAT_ROOMS, {
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch chat rooms");
    }

    const obj = await res.json();

    // Process the chat rooms data
    const processedRooms = await Promise.all(
      obj.data.map(async (chatRoom) => {
        if (chatRoom.user.profileImg != null) {
          const contentRes = await fetch(
            api.GET_CONTENT + chatRoom.user.profileImg.id,
            {
              credentials: "include",
            }
          );
          if (!contentRes.ok) {
            throw new Error("Failed to fetch profile image");
          }
          const blob = await contentRes.blob();
          const profileImgUrl = URL.createObjectURL(blob);
          console.log("Image URL: " + profileImgUrl);
          chatRoom.user.profileImg.url = profileImgUrl;
        } else {
          chatRoom.user.profileImg = {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
          };
        }
        return chatRoom; // Return the processed chat room
      })
    );
    return processedRooms;
  };

  async function initDB() {
    try {
      let db = await dbPromise;
      const rooms = await _getChatRooms();
      console.log(rooms, "This is rooms");

      for (const room of rooms) {
        let chats = await _getChats(room.chatRoomId);
        let countUnread = 0;
        for (let i = chats.length - 1; i >= 0; i--) {
          if (chats[i].status === "UNREAD") {
            countUnread++;
          } else {
            break;
          }
        }
        console.log("{{{{{{{{{{{{{{{{{{{{");
        console.log(chats);
        room["countUnread"] = countUnread;
        room["latestChatTime"] = chats[0]?.time;

        await addChat(chats);
      }
      await addRooms(rooms);
    } catch (error) {
      console.log(error);
    }
  }

  async function destroy() {
    const db = await dbPromise;
    db.close();

    // Delete the database
    const deleteRequest = indexedDB.deleteDatabase(dbName);

    deleteRequest.onerror = function (event) {
      console.error("Failed to delete database:", event.target.error);
    };

    deleteRequest.onsuccess = function (event) {
      console.log("Database deleted successfully.");
    };
  }

  async function _getChats(id) {
    try {
      const res = await fetch(`http://localhost:4000/chat-room/chat/${id}`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        return data.data;
        // console.log("setted",chats.length);
      } else {
        // Handle error response
        console.log("Failed to fetch chats");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching chats:", error);
    }
  }

  async function addRooms(rooms) {
    try {
      const db = await dbPromise;
      console.log("IndexedDB connection established");

      const transaction = db.transaction(["chatRooms"], "readwrite");
      const objectStore = transaction.objectStore("chatRooms");

      rooms.forEach((room) => {
        objectStore.add(room);
        console.log("Added room:", room);
      });

      transaction.oncomplete = () => {
        console.log("Transaction completed successfully");
      };

      transaction.onerror = (event) => {
        console.error("Transaction error:", event.target.error);
      };
    } catch (error) {
      console.error("Error adding data:", error.message);
    }
  }

  async function addChat(chat) {
    try {
      const db = await dbPromise;
      const transaction = db.transaction(["chats"], "readwrite");
      const objectStore = transaction.objectStore("chats");

      if (Array.isArray(chat)) {
        chat.forEach((item) => {
          objectStore.add(item);
        });
      } else {
        objectStore.add(chat);
      }

      transaction.oncomplete = () => {
        console.log("Data added successfully");
      };

      transaction.onerror = (event) => {
        console.log(event.target.error);
        // throw new Error("Transaction error: " + event.target.error);
      };
    } catch (error) {
      console.log(error);
      // throw new Error("Error adding data: " + error.message);
    }
  }

  async function getChatsDB(chatRoomId) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await dbPromise;
        const transaction = db.transaction(["chats"], "readonly");
        const objectStore = transaction.objectStore("chats");

        // Access the index for chatRoomId
        const index = objectStore.index("chatRoomId");

        // Define the range of values to retrieve from the index
        const range = IDBKeyRange.only(chatRoomId);

        // Retrieve all chats for the specified chatRoomId using getAll()
        const getAllRequest = index.getAll(range);
        getAllRequest.onsuccess = function (event) {
          const chats = event.target.result;
          console.log("All chats with chat room ID " + chatRoomId + ":", chats);
          resolve(chats); // Resolve the Promise with the chats array
        };
        getAllRequest.onerror = function (event) {
          console.error(
            "Error retrieving all chats by chat room ID:",
            event.target.error
          );
          reject(event.target.error); // Reject the Promise with the error
        };
      } catch (error) {
        console.error(
          "Error querying all chats by chat room ID:",
          error.message
        );
        reject(error); // Reject the Promise with the error
      }
    });
  }

  async function getChatRoomsDB(chatRoomId) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await dbPromise;
        const transaction = db.transaction(["chatRooms"], "readonly");
        const objectStore = transaction.objectStore("chatRooms");

        // Retrieve all chats for the specified chatRoomId using getAll()
        const getAllRequest = objectStore.getAll();
        getAllRequest.onsuccess = function (event) {
          const chatRooms = event.target.result;
          console.log(
            "All chats with chat room ID " + chatRoomId + ":",
            chatRooms
          );
          resolve(chatRooms); // Resolve the Promise with the chats array
        };
        getAllRequest.onerror = function (event) {
          console.error(
            "Error retrieving all chatRooms by chat room ID:",
            event.target.error
          );
          reject(event.target.error); // Reject the Promise with the error
        };
      } catch (error) {
        console.error(
          "Error querying all chatRooms by chat room ID:",
          error.message
        );
        reject(error); // Reject the Promise with the error
      }
    });
  }

  return (
    <DBContext.Provider
      value={{
        dbPromise,
        addRooms,
        addChat,
        initDB,
        getChatsDB,
        destroy,
        getChatRoomsDB,
      }}
    >
      {children}
    </DBContext.Provider>
  );
};

export default DBProvider;
