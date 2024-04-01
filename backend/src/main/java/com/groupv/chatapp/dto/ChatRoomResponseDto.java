package com.groupv.chatapp.dto;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.model.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatRoomResponseDto {

    private Integer chatRoomId;
    private UserDto user1;

    private UserDto user2;

//    private List<ChatData> chatData;
    public ChatRoomResponseDto(ChatRoom chatRoom){
        setChatRoomId(chatRoom.getChatRoomId());
        setUser1(new UserDto(chatRoom.getUser1()));
        setUser2(new UserDto(chatRoom.getUser2()));
    }

    public ChatRoomResponseDto(Integer chatRoomId,User user1,User user2){
        setChatRoomId(chatRoomId);
        setUser1(new UserDto(user1));
        setUser2(new UserDto(user2));
    }

}
