package com.groupv.chatapp.dto;

import com.groupv.chatapp.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
    String username;
    String name;
    String email;
    String bio;

    public UserDto(User user){
        this.username = user.getUsername();
        this.name = user.getName();
        this.bio = user.getBio();
        this.email = user.getEmail();
    }
}
