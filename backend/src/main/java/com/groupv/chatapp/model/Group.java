package com.groupv.chatapp.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Builder
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

    @ManyToOne
    @JoinColumn(
            name = "username")
    @NotNull(message = "group creator name cannot be empty")
    @JsonBackReference("creator")
    private User creator; //fk

    private LocalDateTime createdAt = LocalDateTime.now();

    // foreign key
    @OneToOne(fetch = FetchType.EAGER)
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
