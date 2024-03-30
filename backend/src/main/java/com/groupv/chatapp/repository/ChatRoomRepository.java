package com.groupv.chatapp.repository;

import com.groupv.chatapp.dto.ChatRoomResponseDto;
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

    @Query("select new com.groupv.chatapp.dto.ChatRoomResponseDto(c.chatRoomId,c.user1,c.user2) from ChatRoom c where c.user1 = ?1 or c.user2 = ?1 ")
    List<ChatRoomResponseDto> findInUser1OrUser2(User user1);

    @Query("select count(*)>0 from ChatRoom c where (c.user1 = ?1 and c.user2 = ?2) or (c.user1 = ?2 and c.user2 = ?1) ")
    boolean exists(User user1,User user2);

    @Query("select c from ChatRoom c where (c.user1 = ?1 and c.user2 = ?2) or (c.user1 = ?2 and c.user2 = ?1) ")
    List<ChatRoom> justFind(User user1,User user2);
}
