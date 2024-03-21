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
@Table
public class GroupChatData {



    @Id
    @GeneratedValue
    private String chatId;

    @ManyToOne
    @JoinColumn(
            name = "group_id"
    )
    private Group groupId;

    @ManyToOne
    @JoinColumn(
            name = "senderId"
    )
    private User sender; //fk


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
