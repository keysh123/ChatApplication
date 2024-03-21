package com.groupv.chatapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class ChatRoom {

    @Id
    @GeneratedValue
    private String chatRoomId;

    @OneToOne
    @JoinColumn(
            name = "username1"
    )
    private User user1;

    @OneToOne
    @JoinColumn(
            name = "username2"
    )
    private User user2;

    @OneToMany(
            mappedBy = "chatRoomId"
    )
    private List<ChatData> chatData;
}
