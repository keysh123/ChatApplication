package com.groupv.chatapp.service;

import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.model.ChatDataStatus;
import com.groupv.chatapp.model.GroupChatData;
import com.groupv.chatapp.repository.GroupChatDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class GroupChatDataService {
    @Autowired
    private GroupChatDataRepository groupChatDataRepository;
    public GroupChatData saveChat(GroupChatData chatData){
     chatData.setTime(LocalDateTime.now());
        return groupChatDataRepository.save(chatData);
    }
    public List<GroupChatData> show(){
        return groupChatDataRepository.findAll();
    }
    public GroupChatData updateStatus(Integer chatId, String status){
        GroupChatData chatData=groupChatDataRepository.findById(chatId).orElseThrow(()-> new IllegalArgumentException("Chat Not Found"));
        chatData.setStatus(ChatDataStatus.valueOf(status));
        return groupChatDataRepository.save(chatData);
    }

}
