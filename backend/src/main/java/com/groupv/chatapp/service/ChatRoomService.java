package com.groupv.chatapp.service;

import com.groupv.chatapp.dto.ChatRoomResponseDto;
import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.model.User;
import com.groupv.chatapp.repository.ChatRoomRepository;
import com.groupv.chatapp.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ChatRoomService {
    @Autowired
    private ChatRoomRepository chatRoomRepository;

    @Autowired
    private UserRepository userRepository;

    public ChatRoom createChatRoom(ChatRoom chatRoom) {
        return chatRoomRepository.save(chatRoom);
    }

    public List<ChatRoom> findChatRoomsBySenderOrReceiver(String username) {
        List<ChatRoom> list = chatRoomRepository.findByUser1(
                userRepository.findById(username).orElseThrow(() -> new IllegalArgumentException("User Not Found"))
        );
        if (list.isEmpty()) {
            list = chatRoomRepository.findByUser2(
                    userRepository.findById(username).orElseThrow(() -> new IllegalArgumentException("User Not Found"))
            );
        }
        return list;
    }

    public List<ChatRoomResponseDto> findByUser(String username){
        User user = userRepository.findByUsername(username).orElseThrow(()->new UsernameNotFoundException("Username not found"));
        List<ChatRoomResponseDto> list = chatRoomRepository.findInUser1OrUser2(user,username);
        return list;
    }
    public ChatRoom findChatRoomsByBoth(String sender, String receiver) {
        return chatRoomRepository.findByUser1AndUser2(userRepository.findById(sender).orElseThrow(() -> new IllegalArgumentException("User Not Found")),
                        userRepository.findById(receiver).orElseThrow(() -> new IllegalArgumentException("User not found")))
                .orElse(chatRoomRepository.findByUser2AndUser1(userRepository.findById(sender).orElseThrow(() -> new IllegalArgumentException("User Not Found")),
                        userRepository.findById(receiver).orElseThrow(() -> new IllegalArgumentException("User not found"))).orElseThrow(() -> new IllegalArgumentException("ChatRoom Not found")));
    }

    public void deleteChatRoom(Integer id) {
        chatRoomRepository.deleteById(id);
    }

    public boolean exists(User user1,User user2){
        boolean b = chatRoomRepository.exists(user1,user2);
        System.out.println(b);
        return b;
    }

    public List<ChatRoom> justFind(String u1, String u2){
        User user1 = userRepository.findByUsername(u1).orElseThrow(
                ()->new UsernameNotFoundException("")
        );

        User user2 = userRepository.findByUsername(u2).orElseThrow(
                ()->new UsernameNotFoundException("")
        );

        return chatRoomRepository.justFind(user1,user2);
    }

}
