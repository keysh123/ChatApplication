package com.groupv.chatapp.service;

import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.model.User;
import com.groupv.chatapp.repository.ChatRoomRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ChatRoomService {
    @Autowired
    private ChatRoomRepository chatRoomRepository;

    public ChatRoom createChatRoom(User user1, User user2){
        ChatRoom chatRoom=ChatRoom.builder()
                .user1(user1)
                .user2(user2)
                .build();
        return chatRoomRepository.save(chatRoom);
    }





}
