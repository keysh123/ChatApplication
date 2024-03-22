package com.groupv.chatapp.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name="Group_chat")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer groupId;

    @NotEmpty(message = "group name cannot be empty")
    private String groupName;
    //@NotEmpty(message = "group creator name cannot be empty")
    @ManyToOne
    @JoinColumn(
            name = "username")
    @JsonBackReference
    private User creator; //fk

    private LocalDateTime createdAt = LocalDateTime.now();

    // foreign key
    @OneToOne
    @JoinColumn(
            name="groupProfileImage")
    private Content groupImg;
    private String description;

    @OneToMany(
            mappedBy = "groupId")
    @JsonManagedReference
    private List<GroupParticipant> groupParticipants;

    @OneToMany(
            mappedBy = "groupId"
    )
    @JsonManagedReference
    private List<GroupChatData> groupChatData;


}
