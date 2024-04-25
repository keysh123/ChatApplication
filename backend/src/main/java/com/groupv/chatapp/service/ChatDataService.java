package com.groupv.chatapp.service;

import com.groupv.chatapp.dto.ChatDto;
import com.groupv.chatapp.exception.DoesNotExistException;
import com.groupv.chatapp.model.*;
import com.groupv.chatapp.repository.ChatDataRepository;
import com.groupv.chatapp.repository.ChatRoomRepository;
import com.groupv.chatapp.repository.ContentRepository;
import com.groupv.chatapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ChatDataService {
    private final ChatDataRepository chatDataRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final UserRepository userRepository;
    private final ContentRepository contentRepository;

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
                .status(ChatDataStatus.SENT)
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

    public void changeToUnread(Integer chatRoomId) {
        List<ChatData> chatDataList=chatDataRepository.findByChatRoom(
                chatRoomRepository.findById(chatRoomId).orElseThrow(()-> new IllegalArgumentException("no chat room found"))
        );
        for (ChatData chatData:chatDataList){
            chatData.setStatus(ChatDataStatus.UNREAD);
            chatDataRepository.save(chatData);
        }

    }
    public void changeToRead(Integer chatRoomId) {
        List<ChatData> chatDataList=chatDataRepository.findByChatRoom(
                chatRoomRepository.findById(chatRoomId).orElseThrow(()-> new IllegalArgumentException("no chat room found"))
        );
        for (ChatData chatData:chatDataList){
            chatData.setStatus(ChatDataStatus.READ);
            chatDataRepository.save(chatData);
        }

    }

//    public List<> getChats(String username, String uname) {
//        List<ChatRoom> chatRoom = chatRoomService.justFind(username,uname);
//
////        return chatDataRepository.findByChatRoomIdOrderByTimeAsc(chatRoom.)
//    }

//    public List<?> getAllChats()
}
