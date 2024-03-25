package com.groupv.chatapp.repository;

import com.groupv.chatapp.model.Group;
import com.groupv.chatapp.model.GroupParticipant;
import com.groupv.chatapp.model.GroupUserComposite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroupParticipantRepository extends JpaRepository<GroupParticipant, GroupUserComposite> {
    List<GroupParticipant> findByGroupId(Group group);
}
