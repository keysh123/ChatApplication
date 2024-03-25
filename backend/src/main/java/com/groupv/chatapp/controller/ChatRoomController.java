package com.groupv.chatapp.controller;

import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.service.ChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChatRoomController {
    @Autowired
    private ChatRoomService  chatRoomService;

    @PostMapping("/room")
    public ChatRoom saveChatRoom(@RequestBody ChatRoom room){
        return chatRoomService.createChatRoom(room);
    }


    @DeleteMapping("room/{chatRoomId}")
    public void delete(@PathVariable Integer chatRoomId){
        chatRoomService.deleteChatRoom(chatRoomId);
    }
}
