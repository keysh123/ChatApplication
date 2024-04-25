package com.groupv.chatapp.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UpdateUserDto {
    private String currentUsername;
    private String username;
    private String email;
    private String bio;
    private ContentDto profileImg;


    // Constructors, getters, and setters can be added as needed
}

