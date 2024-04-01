package com.groupv.chatapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
//    @JsonIgnore
    private User user1;

    @ManyToOne
    @JoinColumn(
            name = "username2"
    )
//    @JsonIgnore
//    @JsonBackReference("receiver")
    private User user2;

    @OneToMany(
            mappedBy = "chatRoom"
    )
    @JsonManagedReference("chatroomInfo")
    private List<ChatData> chatData;
}
