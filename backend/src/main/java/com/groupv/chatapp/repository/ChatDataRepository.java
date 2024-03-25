package com.groupv.chatapp.repository;

import com.groupv.chatapp.model.ChatData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatDataRepository extends JpaRepository<ChatData,Integer> {

}
