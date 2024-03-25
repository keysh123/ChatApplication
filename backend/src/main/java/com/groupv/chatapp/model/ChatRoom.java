package com.groupv.chatapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ChatRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatRoomId;

    @OneToOne
    @JoinColumn(
            name = "username1"
    )
    @JsonBackReference("sender")
    private User user1;

    @OneToOne
    @JoinColumn(
            name = "username2"
    )
    @JsonBackReference("receiver")
    private User user2;

    @OneToMany(
            mappedBy = "chatRoomId"
    )
    @JsonManagedReference("chatroomInfo")
    private List<ChatData> chatData;
}
