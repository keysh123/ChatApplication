package com.groupv.chatapp.model;

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
    @GeneratedValue
    private Integer chatRoomId;

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
