package com.groupv.chatapp.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.model.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ChatRoomDto {
    private String user1;
    private String user2;
}
