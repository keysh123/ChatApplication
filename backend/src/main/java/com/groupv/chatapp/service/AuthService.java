package com.groupv.chatapp.service;

import com.groupv.chatapp.config.CustomAuthProvider;
import com.groupv.chatapp.dto.AuthenticationRequest;
import com.groupv.chatapp.dto.AuthenticationResponse;
import com.groupv.chatapp.dto.RegisterRequest;
import com.groupv.chatapp.exception.UserDoesNotExistException;
import com.groupv.chatapp.model.User;
import com.groupv.chatapp.dto.UserDto;
import com.groupv.chatapp.repository.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.function.Supplier;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final CustomAuthProvider authProvider;

    @Autowired
    private AuthenticationManager authenticationManager;


    public UserDto saveUser(User user) throws DuplicateKeyException {
        if (userRepository.existsById(user.getUsername())) {
            throw new DuplicateKeyException("username is duplicate");
        }
        User u = userRepository.save(user);
        return new UserDto(u);
    }

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .username(request.getUsername())
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .bio(request.getBio())
                .createdAt(LocalDateTime.now())
                .build();
        saveUser(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .user(new UserDto(user))
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) throws UsernameNotFoundException, BadCredentialsException,Exception {
        System.out.println(request);
        Authentication authentication;

        authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);


        User user = userRepository.findByUsername(request.getUsername()).orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        var jwtToken = jwtService.generateToken(user);
        System.out.println("666666666666666666666666666666666666666666" + jwtToken);
        return AuthenticationResponse.builder().token(jwtToken).user(new UserDto(user)).build();
    }

    public void removeAuthCookie(HttpServletRequest request, HttpServletResponse response) {
        removeCookie(request,response,"Authorization");
    }

    public void removeCookie(HttpServletRequest request,HttpServletResponse response,String name){
        Cookie[] cookies = request.getCookies();
        if(cookies != null){
            for (Cookie cookie:cookies) {
                if(name.equals(cookie.getName())){
                    cookie.setValue(null);
                    cookie.setMaxAge(0);
                    cookie.setPath("/");
                    response.addCookie(cookie);
                }
            }
        }
    }
}
