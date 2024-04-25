package com.groupv.chatapp.repository;

import com.groupv.chatapp.dto.UserDto;
import com.groupv.chatapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    

//    @Query("SELECT u FROM User u LEFT JOIN FETCH u.profileImg WHERE u.username = :username")
    Optional<User> findByUsername(String username);
    boolean existsByEmail(String email);

    @Query("SELECT new com.groupv.chatapp.dto.UserDto(u) FROM User u WHERE u.username LIKE %?1%")
    List<UserDto> findByUsernameContaining(String searchString);


//    Optional<User> findByUsernameWithProfileImg(String username);

//    Optional<User> findUsername(String username);

}
