package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.SuccessDto;
import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.service.ChatDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> updateToUnread(@PathVariable Integer id){chatDataService.changeToUnread(id);
        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(), HttpStatus.OK), HttpStatus.OK);
    }
    @PutMapping("/chatData/read/{id}")
    public ResponseEntity<?> updateToRead(@PathVariable Integer id){
        chatDataService.changeToRead(id);
        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(), HttpStatus.OK), HttpStatus.OK);
    }
}
