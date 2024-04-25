package com.groupv.chatapp.controller;

import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.service.ChatDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(originPatterns = "**",allowCredentials = "true")
public class ChatDataController {
    @Autowired
    private ChatDataService chatDataService;

    @PostMapping("/chatData")
    public ChatData addChatData(@RequestBody ChatData chatData){
        return chatDataService.saveChatData(chatData);
    }

    @PutMapping("/chatData/unread/{id}")
    public List<ChatData> updateToUnread(@PathVariable Integer id){
        return chatDataService.changeToUnread(id);
    }
    @PutMapping("/chatData/read/{id}")
    public List<ChatData> updateToRead(@PathVariable Integer id){
       return chatDataService.changeToRead(id);
    }
}
