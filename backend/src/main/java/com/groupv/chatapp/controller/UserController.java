package com.groupv.chatapp.controller;


import com.groupv.chatapp.dto.SimpleTextDataDto;
import com.groupv.chatapp.dto.SuccessDto;
import com.groupv.chatapp.dto.UpdateUserDto;
import com.groupv.chatapp.dto.UserDto;
import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.model.User;
import com.groupv.chatapp.repository.ContentRepository;
import com.groupv.chatapp.repository.UserRepository;
import com.groupv.chatapp.service.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

//@CrossOrigin(originPatterns = "**",allowCredentials = "true")
@CrossOrigin(originPatterns = "**",allowCredentials = "true")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {
    private final ContentService contentService;
    private final ContentRepository contentRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

//    @CrossOrigin(originPatterns = "**",allowCredentials = "true")
//    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/profile-img")
//    @CrossOrigin(originPatterns = "**",allowCredentials = "true")
    public ResponseEntity<?> setProfileImg(
            @RequestParam("file") MultipartFile profileImg,
//            @RequestAttribute("username") String username
            @RequestHeader("username") String username
    ) throws IOException {

        System.out.println("user holll ");
        int id = contentService.saveContent(new Content(profileImg.getOriginalFilename(), profileImg.getContentType(), profileImg.getBytes()));
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username + " not found"));
        user.setProfileImg(
                contentRepository.findById(id).orElseThrow()
        );
        System.out.println(user.getProfileImg());
        userRepository.save(user);
    System.out.println("HOLL");
        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(), HttpStatus.OK), HttpStatus.OK);
    }

    @PutMapping("/bio")
    @CrossOrigin(originPatterns = "**",allowCredentials = "true")
    public ResponseEntity<?> setBio(
//            @RequestBody SimpleTextDataDto textDto,
            @RequestBody String textDto,
            @RequestParam("username") String username
    ) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username + " not found"));
        user.setBio(
                textDto
        );
        userRepository.save(user);
        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(), HttpStatus.OK), HttpStatus.OK);
    }

    @PutMapping("/password")
    public ResponseEntity<?> setPassword(
            @RequestBody SimpleTextDataDto dataDto,
            @RequestAttribute("username") String username
    ) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username + " not found"));
        user.setPassword(
                passwordEncoder.encode(dataDto.getData())
        );
        userRepository.save(user);
        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(), HttpStatus.OK), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<?> getUsers(
            @RequestParam String query
    ){
        System.out.println("--------------------"+query);
        List<UserDto> users = userRepository.findByUsernameContaining(query);
        System.out.println(users.size());
        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(),users), HttpStatus.OK);
    }

    @Transactional
    @PutMapping("/update")
    @CrossOrigin(originPatterns = "**",allowCredentials = "true")
    public ResponseEntity<?> updateUserDetails(

            @RequestBody UpdateUserDto updateUserDto
    ) {
                String currentusername = updateUserDto.getCurrentUsername();

    System.out.println(updateUserDto.getBio());
        User user = userRepository.findByUsername(currentusername)
                .orElseThrow(() -> new UsernameNotFoundException(currentusername + " not found"));

        // Update user details
//        if (updateUserDto.getUsername() != null) {
            user.setBio(updateUserDto.getBio());
//        }

        userRepository.save(user);
    System.out.println("bio "+user.getBio());

        return ResponseEntity.ok(new SuccessDto(HttpStatus.OK.value(), "User details updated successfully"));
    }
}
