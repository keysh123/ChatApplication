package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.ChatRoomDto;
import com.groupv.chatapp.dto.ChatRoomResponseDto;
import com.groupv.chatapp.dto.ErrorDto;
import com.groupv.chatapp.dto.SuccessDto;
import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.model.User;
import com.groupv.chatapp.repository.ChatRoomRepository;
import com.groupv.chatapp.repository.UserRepository;
import com.groupv.chatapp.service.ChatRoomService;
import com.groupv.chatapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChatRoomController {
    @Autowired
    private ChatRoomService  chatRoomService;
    @Autowired
    private UserRepository userRepository;

    @Autowired private ChatRoomRepository chatRoomRepository;

    @PostMapping("/room")
    public ResponseEntity<?> saveChatRoom(@RequestBody ChatRoomDto room){
        User user1 = userRepository.findByUsername(room.getUser1()).
                orElseThrow(()->new UsernameNotFoundException(room.getUser1()+" does not exist"));
        User user2 = userRepository.findByUsername(room.getUser2()).
                orElseThrow(()->new UsernameNotFoundException(room.getUser2()+" does not exist"));

        if(!chatRoomService.exists(user1,user2)) {

            ChatRoom chatRoom = ChatRoom.builder()
                    .user1(user1)
                    .user2(user2)
                    .build();
            ChatRoom saved = chatRoomService.createChatRoom(chatRoom);
            return new ResponseEntity<>(new SuccessDto(HttpStatus.CREATED.value(),saved), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new ErrorDto("Already Exists",HttpStatus.CONFLICT.value()),HttpStatus.CONFLICT);
    }

    @GetMapping("/room/{username}")
    public ResponseEntity<?> showChatRooms(@PathVariable String username){
        return new ResponseEntity<>(new SuccessDto(HttpStatus.FOUND.value(),chatRoomService.findByUser(username)),HttpStatus.FOUND);
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
