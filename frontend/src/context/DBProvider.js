import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { DBContext } from "./DBContext";

const DBProvider = ({ children, loading, setLoading }) => {
  const [changedChatRooms, setChangedChatRooms] = useState(false);
  console.log("he--------------------------------------------");
  const dbName = "my_database";

  async function getDB() {
    return new Promise((resolve, reject) => {
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
        roomStore.createIndex("latestChatTime", "latestChatTime", {
          unique: false,
        });
        let chatStore = db.createObjectStore("chats", { keyPath: "chatId" });

        chatStore.createIndex("chatRoomId", "chatRoomId", { unique: false });
      };
    });
  }

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
      // setLoading(true);
      const rooms = await _getChatRooms();
      // setChangedChatRooms(!changedChatRooms);
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
        console.log("{{{{{{{{{{{{{{{s{{{{{");
        console.log(chats);
        room["countUnread"] = countUnread;
        room["latestChatTime"] = new Date(chats[0]?.time);

        await addChat(chats);
        await addRooms([room]);
      }

      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function destroy() {
    const db = await getDB();
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
      const db = await getDB();
      console.log("IndexedDB connection established");

      const transaction = db.transaction(["chatRooms"], "readwrite");
      const objectStore = transaction.objectStore("chatRooms");

      // Create an array to store all the promises
      const addPromises = [];

      rooms.forEach((room) => {
        // Wrap each objectStore.add() operation in a promise
        const addPromise = new Promise((resolve, reject) => {
          const addRequest = objectStore.add(room);

          addRequest.onsuccess = () => {
            console.log("Added room:", room);
            resolve(); // Resolve the promise when the operation succeeds
          };

          addRequest.onerror = (event) => {
            reject(event.target.error); // Reject the promise with the error when the operation fails
          };
        });

        addPromises.push(addPromise); // Push the promise into the array
      });

      // Wait for all promises to resolve
      await Promise.all(addPromises);

      console.log("All rooms added successfully");

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

  async function updateChatRoom(roomId, time) {
    try {
      const db = await getDB();
      const transaction = db.transaction("chatRooms", "readwrite");
      const objectStore = transaction.objectStore("chatRooms");

      // Retrieve the record by roomId
      const getRequest = objectStore.get(roomId);

      getRequest.onsuccess = function (event) {
        const room = event.target.result;
        if (room) {
          // Update the name field
          room.latestChatTime = time;
          room.countUnread = parseInt(room.countUnread+1);

          // Put the updated record back into the object store
          const putRequest = objectStore.put(room);

          putRequest.onsuccess = function () {
            console.log("Room time updated successfully");
          };

          putRequest.onerror = function (event) {
            console.error("Error updating room time:", event.target.error);
          };
        } else {
          //update chat room list
          console.error("Room not found");
        }
      };

      getRequest.onerror = function (event) {
        console.error("Error retrieving room:", event.target.error);
      };
    } catch (error) {
      console.error("Error updating room name:", error.message);
    }
  }

  async function addChat(chat) {
    try {
      const db = await getDB();
      const transaction = db.transaction(["chats"], "readwrite");
      const objectStore = transaction.objectStore("chats");

      if (Array.isArray(chat)) {
        chat.forEach((item) => {
          item.time = new Date(item.time);
          objectStore.add(item);
        });
      } else {
        chat.time = new Date(chat.time);
        objectStore.add(chat);
        await updateChatRoom(chat.chatRoomId, chat.time);
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
        const db = await getDB();
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

  async function getChatRoomsDB() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await getDB();
        const transaction = db.transaction(["chatRooms"], "readonly");
        const objectStore = transaction.objectStore("chatRooms");

        const index = objectStore.index("latestChatTime"); // Replace "name" with the name of the property you want to sort by

        let cursorReq = index.openCursor(null, "prev");

        let rooms = new Array();
        // Open a cursor to retrieve data in sorted order

        // Retrieve all chats for the specified chatRoomId using getAll()
        cursorReq.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            rooms.push(cursor.value);
            cursor.continue();
          } else {
            console.log("All chats with chat room ID " + ":", rooms);
            resolve(rooms); // Resolve the Promise with the chats array
          }
        };

        cursorReq.onerror = function (event) {
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
        getDB,
        addRooms,
        addChat,
        initDB,
        getChatsDB,
        destroy,
        getChatRoomsDB,
        changedChatRooms,
        setChangedChatRooms,
      }}
    >
      {children}
    </DBContext.Provider>
  );
};

export default DBProvider;
