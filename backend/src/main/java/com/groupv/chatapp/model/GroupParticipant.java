package com.groupv.chatapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
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
    @JsonBackReference("participant")
    private User username; //foreign key primary key
    private LocalDateTime joinedAt;
    private GroupRole role; // ADMIN, USER
}
