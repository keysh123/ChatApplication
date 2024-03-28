package com.groupv.chatapp.service;

import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.model.ChatDataStatus;
import com.groupv.chatapp.repository.ChatDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ChatDataService {
    @Autowired
    private ChatDataRepository chatDataRepository;
    public ChatData saveChatData(ChatData chatData){
        chatData.setTime(LocalDateTime.now());
        return chatDataRepository.save(chatData);
    }

    public ChatData updateStatus(Integer chatId,String status){
    ChatData chatData=chatDataRepository.findById(chatId).orElseThrow(()-> new IllegalArgumentException("Chat Not Found"));
    chatData.setStatus(ChatDataStatus.valueOf(status));
    return chatDataRepository.save(chatData);
    }
}
