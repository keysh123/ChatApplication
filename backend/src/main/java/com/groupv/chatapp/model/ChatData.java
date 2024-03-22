package com.groupv.chatapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ChatData {

    @Id
    @GeneratedValue
    private Integer chatId;

    @ManyToOne
    @JoinColumn(
            name="chatRoomId"
    )
    private ChatRoom chatRoomId; //fk

    @ManyToOne
    @JoinColumn(
            name = "senderId"
    )
    private User sender; //fk

    @ManyToOne
    @JoinColumn(
            name = "receiverId"
    )
    private User receiver; //fk

    private String text;
    private ContentType contentType;

    //fk
    @OneToOne
    @JoinColumn(
            name = "contentId"
    )
    private Content content;
    private LocalDateTime time;
    private ChatDataStatus status;
}
