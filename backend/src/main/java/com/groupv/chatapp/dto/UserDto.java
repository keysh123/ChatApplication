package com.groupv.chatapp.dto;


import com.groupv.chatapp.model.User;
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
    ContentDto profileImg;
//    Content profileImg;

    public UserDto(User user){
        setUsername(user.getUsername());
        setName(user.getName());
        setBio(user.getBio());
        setEmail(user.getEmail());
        if(user.getProfileImg()!=null) setProfileImg(new ContentDto(user.getProfileImg()));
    }
}
