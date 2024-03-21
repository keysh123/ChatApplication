package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.*;
import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.model.User;
import com.groupv.chatapp.service.AuthService;
import com.groupv.chatapp.service.ContentService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin
//@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private ContentService contentService;

    @PostMapping("/api/v1/auth/register")
    public ResponseEntity<?> register(
            HttpServletRequest httpServletRequest,
            HttpServletResponse httpServletResponse,
            @RequestBody @Valid RegisterRequest request
    ){
        AuthenticationResponse authResponse = authService.register(request);
        Cookie cookie = new Cookie("Authorization", authResponse.getToken());
        cookie.setMaxAge(1000*60*60*24);
        cookie.setPath("/");
        httpServletResponse.addCookie(cookie);

        return new ResponseEntity(new SuccessDto(authResponse.getUser(),HttpStatus.CREATED.value()),HttpStatus.CREATED);
//        try {
//            UserDto u = authService.saveUser(user);
//            return new ResponseEntity<>(new SuccessDto(u,HttpStatus.CREATED.value()),HttpStatus.CREATED);
//        }catch (DuplicateKeyException e){
//            System.out.println(e);
//            return new ResponseEntity<>(new ErrorDto(e.getMessage(),HttpStatus.CONFLICT.value()),HttpStatus.CONFLICT);
//        }catch (Exception e){
//            System.out.println(e);
//            return new ResponseEntity<>(new ErrorDto(e.getMessage(),HttpStatus.BAD_REQUEST.value()),HttpStatus.BAD_REQUEST);
//        }
    }

    @PostMapping("/api/v1/auth/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ){
        System.out.println("-------------------------------------------------authen");
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping("/upload")
    public String uploadImg(@RequestParam("file") MultipartFile file) throws IOException {
        System.out.println(file.getName());
        System.out.println("sdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"+file);
        return contentService.saveContent(new Content(file.getContentType(), file.getBytes()));
    }


}
