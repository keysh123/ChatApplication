package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.ChatRoomDto;
import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.repository.UserRepository;
import com.groupv.chatapp.service.ChatRoomService;
import com.groupv.chatapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChatRoomController {
    @Autowired
    private ChatRoomService  chatRoomService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/room")
    public ChatRoom saveChatRoom(@RequestBody ChatRoomDto room){
        ChatRoom chatRoom = ChatRoom.builder()
                .user1(userRepository.findByUsername(room.getUser1()).
                        orElseThrow(()->new UsernameNotFoundException(room.getUser1()+" does not exist"))
                )
                .user2(userRepository.findByUsername(room.getUser2()).
                        orElseThrow(()->new UsernameNotFoundException(room.getUser2()+" does not exist"))
                )
                .build();
        return chatRoomService.createChatRoom(chatRoom);
    }

    @GetMapping("/room/sender/{username}")
    public List<ChatRoom> showChatRoomsBySender(@PathVariable String username){
        return chatRoomService.findChatRoomsBySenderOrReceiver(username);
    }
    @GetMapping("/room/receiver/{username}")
    public List<ChatRoom> showChatRoomsByReceiver(@PathVariable String username){
        return chatRoomService.findChatRoomsBySenderOrReceiver(username);
    }
    @GetMapping("/room/both/{sender}/{receiver}")
    public ChatRoom showChatRoomsByBoth(@PathVariable String sender,@PathVariable String receiver){
        return chatRoomService.findChatRoomsByBoth(sender,receiver);
    }
    @DeleteMapping("room/{chatRoomId}")
    public void delete(@PathVariable Integer chatRoomId){
        chatRoomService.deleteChatRoom(chatRoomId);
    }
}
