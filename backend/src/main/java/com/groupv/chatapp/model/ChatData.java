package com.groupv.chatapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ChatData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatId;

    @ManyToOne
    @JoinColumn(name = "roomId")
    @JsonBackReference("chatroomInfo")
    private ChatRoom chatRoom; //fk

    @ManyToOne
    @JoinColumn(
            name = "senderId"
    )
    @JsonBackReference("sender-chat")
    private User sender; //fk

    @ManyToOne
    @JoinColumn(
            name = "receiverId"
    )
    @JsonBackReference("receiver-chat")
    private User receiver; //fk

    private String text;

    private String format;

    //fk
    @OneToOne
    @JoinColumn(
            name = "contentId"
    )
    private Content content;
    private LocalDateTime time = LocalDateTime.now();
    private ChatDataStatus status;
}
