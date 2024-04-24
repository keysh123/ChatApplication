package com.groupv.chatapp.service;

import com.groupv.chatapp.model.User;
import com.groupv.chatapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    public void saveUser(User user){
        repository.save(user);
    }


//    public void disconnect(User user){
//        var storedUser = repository.findById(user.getUsername())
//                .orElse(null);
//        if(storedUser!=null){
//
//        }
//    }

}
