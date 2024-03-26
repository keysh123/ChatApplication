package com.groupv.chatapp.repository;

import com.groupv.chatapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    

//    @Query("SELECT u FROM User u LEFT JOIN FETCH u.profileImg WHERE u.username = :username")
    Optional<User> findByUsername(String username);
//    Optional<User> findByUsernameWithProfileImg(String username);

//    Optional<User> findUsername(String username);

}
