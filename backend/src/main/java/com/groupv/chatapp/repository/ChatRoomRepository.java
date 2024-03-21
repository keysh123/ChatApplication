package com.groupv.chatapp.repository;

import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom,String> {


}
