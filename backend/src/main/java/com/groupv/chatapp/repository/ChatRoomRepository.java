package com.groupv.chatapp.repository;

import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom,Integer> {


    List<ChatRoom> findByUser1( User user);

    List<ChatRoom> findByUser2(User user);

    Optional<ChatRoom> findByUser1AndUser2(User user, User user2);

    Optional<ChatRoom> findByUser2AndUser1(User user,User user2);
}
