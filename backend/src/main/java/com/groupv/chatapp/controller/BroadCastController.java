//package com.groupv.chatapp.controller;
//
//
//import com.groupv.chatapp.dto.ChatDto;
//import com.groupv.chatapp.exception.DoesNotExistException;
//import com.groupv.chatapp.model.ChatData;
//import com.groupv.chatapp.service.ChatDataService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.handler.annotation.Payload;
//import org.springframework.messaging.handler.annotation.SendTo;
//import org.springframework.messaging.simp.SimpMessagingTemplate;
//import org.springframework.stereotype.Controller;
//
//@Controller
//@RequiredArgsConstructor
//public class BroadCastController {
//    private final SimpMessagingTemplate messagingTemplate;
//    private final ChatDataService chatDataService;
//
//    @MessageMapping("/hello")
//    @SendTo("/topic/greetings")
//    public ChatData broadcast(
//            @Payload ChatDto chat
//    ) throws DoesNotExistException {
//        System.out.println(chat);
//        ChatData savedChat = chatDataService.saveChatData(chat);
//
//        return savedChat;
//    }
//}
