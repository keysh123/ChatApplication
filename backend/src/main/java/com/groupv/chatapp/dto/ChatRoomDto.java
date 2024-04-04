package com.groupv.chatapp.dto;


import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class ChatRoomDto {
    private String user1;
    private String user2;
}
