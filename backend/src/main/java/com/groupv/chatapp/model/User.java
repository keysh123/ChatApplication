package com.groupv.chatapp.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Objects;


@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class User implements UserDetails {

    @Id
    @NotEmpty(message = "username cannot be empty")
    private String username;

    @Column(
            nullable = false
    )
    @NotEmpty(message = "name cannot be empty")
    private String name;

    @Column(
            nullable = false,
            updatable = false
    )
    @NotEmpty(message = "email cannot be empty")
    private String email;

    @Column(
            nullable = false
    )
    @NotEmpty(message = "password cannot be empty")
    private String password;


    @Column
    private String bio;

    @Column(
            nullable = false
    )
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToOne
    @JoinColumn(
            name = "userProfileImg"
    )
    private Content profileImg; // foreign key of image table

    @OneToMany(
            mappedBy = "creator")
    @JsonManagedReference
    private List<Group> creator;

    @OneToOne(
            mappedBy = "user1"
    )
    private ChatRoom user1;

    @OneToOne(
            mappedBy = "user2"
    )
    private ChatRoom user2;

    @OneToMany(
            mappedBy = "sender"
    )
    private List<ChatData> chatSenderData;

    @OneToMany(
            mappedBy = "receiver"
    )
    private List<ChatData> chatRecieverData;


    @OneToMany(
            mappedBy = "username"
    )
    private List<GroupParticipant> groupParticipants;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    // add validator
}
