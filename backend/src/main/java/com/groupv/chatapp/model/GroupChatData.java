package com.groupv.chatapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class GroupChatData {

    @Id
    @GeneratedValue
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
