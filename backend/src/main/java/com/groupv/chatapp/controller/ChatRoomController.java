package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.*;
import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.model.User;
import com.groupv.chatapp.repository.ChatDataRepository;
import com.groupv.chatapp.repository.ChatRoomRepository;
import com.groupv.chatapp.repository.UserRepository;
import com.groupv.chatapp.service.ChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(originPatterns = "**",allowCredentials = "true")
@RestController
@RequestMapping("/api/v1/chat-room")
public class ChatRoomController {
    @Autowired
    private ChatRoomService chatRoomService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ChatDataRepository chatDataRepository;

    @Autowired
    private ChatRoomRepository chatRoomRepository;


    @PostMapping("")
    public ResponseEntity<?> saveChatRoom(
            @RequestBody ChatRoomDto room,
            @RequestAttribute String username
    ) {
        User user1 = userRepository.findByUsername(room.getUser1()).
                orElseThrow(() -> new UsernameNotFoundException(room.getUser1() + " does not exist"));
        User user2 = userRepository.findByUsername(room.getUser2()).
                orElseThrow(() -> new UsernameNotFoundException(room.getUser2() + " does not exist"));

        if (!chatRoomService.exists(user1, user2)) {

            ChatRoom chatRoom = ChatRoom.builder()
                    .user1(user1)
                    .user2(user2)
                    .build();
            ChatRoom saved = chatRoomService.createChatRoom(chatRoom);
            return new ResponseEntity<>(new SuccessDto(HttpStatus.CREATED.value(), new ChatRoomResponseDto(saved, username)), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new ErrorDto("Already Exists", HttpStatus.CONFLICT.value()), HttpStatus.CONFLICT);
    }

    @GetMapping("")
    public ResponseEntity<?> showChatRooms(
            @RequestAttribute String username
    ) {
        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(), chatRoomService.findByUser(username)), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getChatRoom(
            @PathVariable Integer id,
            @RequestAttribute String username
    ){
        ChatRoomResponseDto room = new ChatRoomResponseDto(chatRoomRepository.findById(id).orElseThrow(),username);

        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(),room), HttpStatus.OK);

    }

    @GetMapping("/room/sender/{username}")
    public List<ChatRoom> showChatRoomsBySender(@PathVariable String username) {
        return chatRoomService.findChatRoomsBySenderOrReceiver(username);
    }

    @GetMapping("/room/receiver/{username}")
    public List<ChatRoom> showChatRoomsByReceiver(@PathVariable String username) {
        return chatRoomService.findChatRoomsBySenderOrReceiver(username);
    }

    @GetMapping("/room/both/{sender}/{receiver}")
    public ChatRoom showChatRoomsByBoth(@PathVariable String sender, @PathVariable String receiver) {
        System.out.println(sender + "called    " + receiver);
        return chatRoomService.findChatRoomsByBoth(sender, receiver);
    }

    @GetMapping("/get-room/{uname}")
    public ResponseEntity<?> sendChats(
            @PathVariable String uname,
            @RequestAttribute String username
    ) {
        return new ResponseEntity<>(new SuccessDto(HttpStatus.FOUND.value(), chatRoomService.justFind(username, uname)), HttpStatus.FOUND);
    }

    @DeleteMapping("/room/{chatRoomId}")
    public void delete(@PathVariable Integer chatRoomId) {
        chatRoomService.deleteChatRoom(chatRoomId);
    }

    @GetMapping("/chat/{id}")
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    public ResponseEntity<?> sendChats(
            @PathVariable Integer id,
            @RequestAttribute String username
    ) {
        List<ChatDto> chatData = chatDataRepository.getAllChatsByChatRoomId(id);
        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(), chatData), HttpStatus.OK);
    }


}


