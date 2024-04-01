package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.ChatDto;
import com.groupv.chatapp.dto.GroupChatDto;
import com.groupv.chatapp.dto.GroupParticipantDto;
import com.groupv.chatapp.dto.SuccessDto;
import com.groupv.chatapp.exception.DoesNotExistException;
import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.model.GroupChatData;
import com.groupv.chatapp.model.GroupParticipant;
import com.groupv.chatapp.repository.GroupParticipantRepository;
import com.groupv.chatapp.service.ChatDataService;
import com.groupv.chatapp.service.ContentService;
import com.groupv.chatapp.service.GroupChatDataService;
import lombok.RequiredArgsConstructor;
import org.aspectj.bridge.Message;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class ChatController {
    private final SimpMessagingTemplate messagingTemplate;
    private final ChatDataService chatDataService;
    private final GroupChatDataService groupChatDataService;
    private final GroupParticipantRepository groupParticipantRepository;
    private final ContentService contentService;

    @MessageMapping("/chat")
    public void oneToOne(
            @Payload ChatDto chat,
            Principal user
    ) throws DoesNotExistException {
        System.out.println(chat);
        System.out.println(user);
        ChatData savedChat = chatDataService.saveChatData(chat);
        System.out.println(savedChat.getSender().getUsername()+" - "+savedChat.getReceiver().getUsername()+" - "+savedChat.getTime());
        ChatDto send;
        if(chat.getContentId()==null){
            send = new ChatDto(savedChat);
        }else {
            send = new ChatDto(savedChat,savedChat.getContent().getFileName());
        }

        messagingTemplate.convertAndSendToUser(
                    savedChat.getReceiver().getUsername(),
                    "/queue/message",
                    send
        );

    }

    @MessageMapping("/group")
    public void groupChat(
            @Payload GroupChatDto chat
    ) throws DoesNotExistException {
        System.out.println(chat);
//        System.out.println(user);
        GroupChatData savedChat = groupChatDataService.saveChat(chat);
        System.out.println(savedChat.getSender().getUsername()+savedChat.getTime());
        List<GroupParticipant> participants = groupParticipantRepository.findByGroupId(savedChat.getGroupId());
        for (GroupParticipant p: participants) {
            messagingTemplate.convertAndSendToUser(
                    p.getUsername().getUsername(),
                    "/queue/message",
                    new GroupChatDto(savedChat)
            );
        }
    }

//    @GetMapping("chat")
//    public ResponseEntity<?> sendChats(
//            @RequestAttribute String username
//    ){
//        chatDataService.
//    }

//    @PostMapping("/upload")
//    public ResponseEntity<?> uploadImg(@RequestParam("file") MultipartFile file) throws IOException {
//        System.out.println(file.getOriginalFilename());
//        System.out.println("sdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"+file);
//
//        int id = contentService.saveContent(new Content(file.getOriginalFilename(),file.getContentType(), file.getBytes()));
//
//        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(),id),HttpStatus.OK);
//    }
}

