
package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.*;
import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.service.AuthService;
import com.groupv.chatapp.service.ContentService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin(originPatterns = "**",allowCredentials = "true")
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private ContentService contentService;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            HttpServletRequest httpServletRequest,
            HttpServletResponse httpServletResponse,
            @RequestBody @Valid RegisterRequest request
    ){
        AuthenticationResponse authResponse = authService.register(request);
        Cookie cookie = new Cookie("Authorization", authResponse.getToken());
        cookie.setMaxAge(1000*60*60*24);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        httpServletResponse.addCookie(cookie);

        return new ResponseEntity(new SuccessDto(HttpStatus.CREATED.value(),authResponse.getUser()),HttpStatus.CREATED);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(
            HttpServletRequest httpServletRequest,
            HttpServletResponse httpServletResponse,
            @RequestBody AuthenticationRequest request
    ){

        AuthenticationResponse authResponse = null;
        try {
            authResponse = authService.authenticate(request);
        } catch (UsernameNotFoundException e) {
           return new ResponseEntity<>(new ErrorDto(e.getMessage(),HttpStatus.NOT_FOUND.value()),HttpStatus.NOT_FOUND);
        }catch (BadCredentialsException e){
           return new ResponseEntity<>(new ErrorDto(e.getMessage(),HttpStatus.UNAUTHORIZED.value()),HttpStatus.UNAUTHORIZED);
        }catch (Exception e){
           return new ResponseEntity<>(new ErrorDto(e.getMessage(),HttpStatus.BAD_REQUEST.value()),HttpStatus.BAD_REQUEST);
        }


        System.out.println(authResponse);
        Cookie cookie = new Cookie("Authorization", authResponse.getToken());
        cookie.setMaxAge(1000*60*60*24);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        httpServletResponse.addCookie(cookie);
        return new ResponseEntity(new SuccessDto(HttpStatus.ACCEPTED.value(),authResponse.getUser()),HttpStatus.ACCEPTED);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(
            HttpServletRequest request,
            HttpServletResponse response
    ){
        SecurityContextHolder.clearContext();
        authService.removeAuthCookie(request,response);
        return new ResponseEntity<>(new SuccessDto(HttpStatus.NO_CONTENT.value(),"Done"),HttpStatus.NO_CONTENT);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImg(@RequestParam("file") MultipartFile file) throws IOException {
        System.out.println(file.getName());
        System.out.println("sdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"+file);

        int id = contentService.saveContent(new Content(file.getContentType(), file.getBytes()));

        return new ResponseEntity<>(new SuccessDto(id,HttpStatus.OK),HttpStatus.OK);
    }


}


