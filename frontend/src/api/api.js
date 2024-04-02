export const api = {
    SIGNIN:"http://localhost:4000/api/v1/auth/authenticate",
    SIGNUP:"http://localhost:4000/api/v1/auth/register",
    SIGNOUT:"http://localhost:4000/api/v1/auth/logout",
    SEARCH_USER:"http://localhost:4000/api/v1/user/search", 
    AUTH_COOKIE:"http://localhost:4000/api/v1/auth",
    GET_CHAT_ROOMS:"http://localhost:4000/api/v1/chat-room",
    POST_CHAT_ROOM:"http://localhost:4000/api/v1/chat-room", //body : {user1:"username",user2:"username"}
    GET_CONTENT:"http://localhost:4000/content/",
    GET_CHATS:"http://localhost:4000/chat-room/chat/", //example rquest : http://localhost:4000/chat-room/chat/{chat-room-id}
} 