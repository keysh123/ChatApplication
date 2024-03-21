package com.groupv.chatapp.service;

import com.groupv.chatapp.dto.AuthenticationRequest;
import com.groupv.chatapp.dto.AuthenticationResponse;
import com.groupv.chatapp.dto.RegisterRequest;
import com.groupv.chatapp.exception.UserDoesNotExistException;
import com.groupv.chatapp.model.User;
import com.groupv.chatapp.dto.UserDto;
import com.groupv.chatapp.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public UserDto saveUser(User user) throws DuplicateKeyException{
        if(userRepository.existsById(user.getUsername())){
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
                .user(user)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

}
