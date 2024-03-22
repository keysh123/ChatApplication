package com.groupv.chatapp.controller;

import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.service.ChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatRoomController {
    @Autowired
    private ChatRoomService  chatRoomService;

    @PostMapping("/room")
    public ChatRoom saveChatRoom(@RequestBody ChatRoom room){
        return chatRoomService.createChatRoom(room);
    }
}
