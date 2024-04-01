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
    private UserDto user;

//    private List<ChatData> chatData;
    public ChatRoomResponseDto(ChatRoom chatRoom,String ownUsername){
        setChatRoomId(chatRoom.getChatRoomId());
        if(!chatRoom.getUser1().getUsername().equals(ownUsername)){
           setUser(new UserDto(chatRoom.getUser1()));
        }else{
           setUser(new UserDto(chatRoom.getUser2()));
        }
//        setUser2(new UserDto(chatRoom.getUser2()));
    }

    public ChatRoomResponseDto(Integer chatRoomId,User user1,User user2,String ownUsername){
        setChatRoomId(chatRoomId);
        if(!user1.getUsername().equals(ownUsername)){
            setUser(new UserDto(user1));
        }else{
            setUser(new UserDto(user2));
        }
    }

}
