package com.groupv.chatapp.repository;

import com.groupv.chatapp.model.GroupChatData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupChatDataRepository extends JpaRepository<GroupChatData,Integer> {

}
