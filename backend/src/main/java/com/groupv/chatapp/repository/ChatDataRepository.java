package com.groupv.chatapp.repository;

import com.groupv.chatapp.model.ChatData;
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

    List<ChatData> findByChatRoomIdOrderByTimeAsc(Integer chatRoomId);

}
