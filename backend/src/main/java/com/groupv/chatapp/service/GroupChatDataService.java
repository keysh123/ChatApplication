package com.groupv.chatapp.service;

import com.groupv.chatapp.dto.GroupChatDto;
import com.groupv.chatapp.exception.DoesNotExistException;
import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.model.ChatDataStatus;
import com.groupv.chatapp.model.GroupChatData;
import com.groupv.chatapp.repository.GroupChatDataRepository;
import com.groupv.chatapp.repository.GroupRepository;
import com.groupv.chatapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupChatDataService {
    private final GroupChatDataRepository groupChatDataRepository;
    private final GroupRepository groupRepository;
    private final UserRepository userRepository;
    public GroupChatData saveChat(GroupChatData chatData){
     chatData.setTime(LocalDateTime.now());
        return groupChatDataRepository.save(chatData);
    }

    public GroupChatData saveChat(GroupChatDto chatData) throws DoesNotExistException {
        GroupChatData groupChatData = GroupChatData.builder()
                .groupId(
                        groupRepository.findById(chatData.getGroupId()).orElseThrow(()->new DoesNotExistException(chatData.getGroupId()+" does not exist"))
                )
                .sender(
                        userRepository.findByUsername(chatData.getSender()).orElseThrow(()->new UsernameNotFoundException(chatData.getSender() + " does not exist"))
                )
                .contentType(chatData.getContentType())
                .text(chatData.getText())
                .time(LocalDateTime.now())
                .build();
     return groupChatDataRepository.save(groupChatData);
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
