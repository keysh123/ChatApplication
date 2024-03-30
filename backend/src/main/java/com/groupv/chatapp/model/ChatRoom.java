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
@Table(
        uniqueConstraints =
                @UniqueConstraint(columnNames = {"username1","username2"})
)
public class ChatRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatRoomId;

    @ManyToOne
    @JoinColumn(
            name = "username1"
    )
//    @JsonBackReference("sender")
    private User user1;

    @ManyToOne
    @JoinColumn(
            name = "username2"
    )
//    @JsonBackReference("receiver")
    private User user2;

    @OneToMany(
            mappedBy = "chatRoomId"
    )
    @JsonManagedReference("chatroomInfo")
    private List<ChatData> chatData;
}
