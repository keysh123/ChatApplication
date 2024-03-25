package com.groupv.chatapp.controller;

import com.groupv.chatapp.model.GroupChatData;
import com.groupv.chatapp.service.GroupChatDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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
}
