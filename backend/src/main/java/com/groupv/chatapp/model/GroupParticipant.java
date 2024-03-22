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
@Table
@IdClass(GroupUserComposite.class)
public class GroupParticipant {

    @Id
    @ManyToOne
    @JoinColumn(
            name = "group_id")
    @JsonBackReference
    private Group groupId; //foreign key primary key

    @Id
    @ManyToOne
    @JoinColumn(
            name = "user_id"
    )
    private User username; //foreign key primary key
    private LocalDateTime joinedAt;
    private GroupRole role; // ADMIN, USER
}
