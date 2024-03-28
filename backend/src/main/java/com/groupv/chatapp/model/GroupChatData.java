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
public class GroupChatData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatId;

    @ManyToOne
    @JoinColumn(
            name = "group_id")
    @JsonBackReference
    private Group groupId;

    @ManyToOne
    @JoinColumn(
            name = "senderId"
    )
    @JsonBackReference("group-sender")
    private User sender; //fk


    private String text;
    private ContentType contentType;

    //fk
    @OneToOne
    @JoinColumn(
            name = "contentId"
    )
    @JsonBackReference("group-chat-content")
    private Content content;

    private LocalDateTime time;
    private ChatDataStatus status;

}
