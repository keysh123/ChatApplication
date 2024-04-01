package com.groupv.chatapp.repository;

import com.groupv.chatapp.dto.ChatDto;
import com.groupv.chatapp.model.ChatData;
import com.groupv.chatapp.model.ChatRoom;
import com.groupv.chatapp.model.Content;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatDataRepository extends JpaRepository<ChatData,Integer> {
    @Modifying
    @Transactional
    @Query("update ChatData c set c.content = ?1 where c.chatId = ?2")
    void updateContentByChatId(Content content, Integer chatId);

    @Query("select new com.groupv.chatapp.dto.ChatDto(c,c.content) from ChatData c LEFT JOIN FETCH c.content co where c.chatRoom.chatRoomId = ?1 order by c.time asc")
    List<ChatDto> getAllChatsByChatRoomId(Integer id);

//    List<ChatData> findByChatRoomChatRoomId(Integer id);

}
