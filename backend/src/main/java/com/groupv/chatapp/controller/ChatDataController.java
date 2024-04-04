package com.groupv.chatapp.controller;

import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.service.ChatDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(originPatterns = "**",allowCredentials = "true")
public class ChatDataController {
    @Autowired
    private ChatDataService chatDataService;

    @PostMapping("/chatData")
    public ChatData addChatData(@RequestBody ChatData chatData){
        return chatDataService.saveChatData(chatData);
    }

    @PutMapping("/chatData/{id}")
    public ChatData updateStatus(@PathVariable Integer id,@RequestBody String status){
        return chatDataService.updateStatus(id,status);
    }
}
