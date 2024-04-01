package com.groupv.chatapp.service;

import com.groupv.chatapp.dto.ChatDto;
import com.groupv.chatapp.exception.DoesNotExistException;
import com.groupv.chatapp.model.*;
import com.groupv.chatapp.repository.ChatDataRepository;
import com.groupv.chatapp.repository.ChatRoomRepository;
import com.groupv.chatapp.repository.ContentRepository;
import com.groupv.chatapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ChatDataService {
    @Autowired
    private ChatDataRepository chatDataRepository;

    @Autowired
    private ChatRoomRepository chatRoomRepository;
    @Autowired
    private ChatRoomService chatRoomService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ContentRepository contentRepository;

    public ChatData saveChatData(ChatData chatData) {
        chatData.setTime(LocalDateTime.now());
        return chatDataRepository.save(chatData);
    }

    public ChatData saveChatData(ChatDto chat) throws DoesNotExistException {
        ChatData chatData = ChatData.builder()
                .chatRoom(
                        chatRoomRepository.findById(chat.getChatRoomId()).orElseThrow(() -> new DoesNotExistException(chat.getChatRoomId() + " does not exist"))
                )
                .sender(
                        userRepository.findByUsername(chat.getSender()).orElseThrow(() -> new UsernameNotFoundException(chat.getSender() + " does not exist"))
                )
                .receiver(
                        userRepository.findByUsername(chat.getReceiver()).orElseThrow(() -> new UsernameNotFoundException(chat.getReceiver() + " does not exist"))
                )
                .text(chat.getText())
                .time(LocalDateTime.now())
                .build();

        ChatData data = chatDataRepository.save(chatData);
//        chatDataRepository.save(chatData);
        if (chat.getContent() != null) {
            Content content = contentRepository.findById(chat.getContent().getId()).orElse(null);
            if (content != null) {
                chatData.setContent(content);
                chatData.setFormat(content.getFormat());
                chatDataRepository.updateContentByChatId(content, data.getChatId());
            }
        } else {
            // Default format if content ID is not provided
            chatData.setFormat("text");
        }
        return data;
    }

    public ChatData updateStatus(Integer chatId, String status) {
        ChatData chatData = chatDataRepository.findById(chatId).orElseThrow(() -> new IllegalArgumentException("Chat Not Found"));
        chatData.setStatus(ChatDataStatus.valueOf(status));
        return chatDataRepository.save(chatData);
    }

//    public List<> getChats(String username, String uname) {
//        List<ChatRoom> chatRoom = chatRoomService.justFind(username,uname);
//
////        return chatDataRepository.findByChatRoomIdOrderByTimeAsc(chatRoom.)
//    }

//    public List<?> getAllChats()
}
