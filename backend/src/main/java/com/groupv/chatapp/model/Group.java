package com.groupv.chatapp.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "group_chat")
public class Group {

    @Id
    @GeneratedValue
    private String groupId;

    @NotEmpty(message = "group name cannot be empty")
    private String groupName;

    @ManyToOne
    @JoinColumn(
            name = "username"
    )
    @NotEmpty(message = "group name cannot be empty")
    private User creator; //fk

    private LocalDateTime createdAt = LocalDateTime.now();

    // foreign key
    @OneToOne
    @JoinColumn(
            name="groupProfileImage"
    )
    private Content groupImg;
    private String description;

    @OneToMany(
            mappedBy = "groupId"
    )
    private List<GroupParticipant> groupParticipants;

    @OneToMany(
            mappedBy = "groupId"
    )
    private List<GroupChatData> groupChatData;


}
