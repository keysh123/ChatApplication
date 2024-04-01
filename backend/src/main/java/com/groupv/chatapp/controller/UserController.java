package com.groupv.chatapp.controller;


import com.groupv.chatapp.dto.SimpleTextDataDto;
import com.groupv.chatapp.dto.SuccessDto;
import com.groupv.chatapp.dto.UserDto;
import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.model.User;
import com.groupv.chatapp.repository.ContentRepository;
import com.groupv.chatapp.repository.UserRepository;
import com.groupv.chatapp.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(originPatterns = "**",allowCredentials = "true")
@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private ContentService contentService;
    @Autowired
    private ContentRepository contentRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PutMapping("/profile-img")
    public ResponseEntity<?> setProfileImg(
            @RequestParam("file") MultipartFile profileImg,
            @RequestAttribute("username") String username
    ) throws IOException {
        int id = contentService.saveContent(new Content(profileImg.getOriginalFilename(), profileImg.getContentType(), profileImg.getBytes()));
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username + " not found"));
        user.setProfileImg(
                contentRepository.findById(id).orElseThrow()
        );
        System.out.println(user.getProfileImg());
        userRepository.save(user);

        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(), HttpStatus.OK), HttpStatus.OK);
    }

    @PutMapping("/bio")
    public ResponseEntity<?> setBio(
            @RequestBody SimpleTextDataDto textDto,
            @RequestAttribute("username") String username
    ) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username + " not found"));
        user.setBio(
                textDto.getData()
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
}
