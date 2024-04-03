package com.groupv.chatapp.controller;

import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.model.GroupChatData;
import com.groupv.chatapp.service.GroupChatDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(originPatterns = "**",allowCredentials = "true")
public class GroupChatDataController {
    @Autowired
    private GroupChatDataService groupChatDataService;
    @PostMapping("/groupChatData")
    public GroupChatData addChat(@RequestBody GroupChatData chatData){
        return groupChatDataService.saveChat(chatData);
    }
    @GetMapping("/GroupChatData")
    public List<GroupChatData> findChat(){
        return groupChatDataService.show();
    }
    @PutMapping("/GroupChatData/{id}")
    public GroupChatData updateStatus(@PathVariable Integer id, @RequestBody String status){
        return groupChatDataService.updateStatus(id,status);
    }
}
