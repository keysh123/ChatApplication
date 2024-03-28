package com.groupv.chatapp.service;

import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.model.Group;
import com.groupv.chatapp.model.GroupParticipant;
import com.groupv.chatapp.model.GroupRole;
import com.groupv.chatapp.repository.GroupParticipantRepository;
import com.groupv.chatapp.repository.GroupRepository;
import com.groupv.chatapp.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class GroupService {
    @Autowired
    private GroupRepository groupRepository;
    private UserRepository userRepository;
    private GroupParticipantRepository groupParticipantRepository;
    public Group addGroup(Group group,String username){
        System.out.println(username);
        group.setCreator(userRepository.findById(username)
                .orElseThrow(()-> new IllegalArgumentException("User not found")));
        Group group1= groupRepository.save(group);
      GroupParticipant  participant = GroupParticipant.builder()
                .groupId(group1)
                .username(userRepository.findById(username).orElseThrow(() -> new IllegalArgumentException("User Not Found")))
                .role(GroupRole.ADMIN)
                .joinedAt(LocalDateTime.now())
                .build();

        groupParticipantRepository.save(participant);
return  group1;
    }

    public Group updateDescription(Integer groupId,String description){
        Group group=groupRepository.getReferenceById(groupId);
        group.setDescription(description);
        return groupRepository.save(group);
    }
    public Group updateName(Integer groupId,String name){
        Group group=groupRepository.getReferenceById(groupId);
        group.setGroupName(name);
        return groupRepository.save(group);
    }

    public Group addGroupPhoto(Integer groupId, Content contentId){
        Group group=groupRepository.getReferenceById(groupId);
        group.setGroupImg(contentId);
        return groupRepository.save(group);
    }

    public List<Group> findAllGroups(){
        return groupRepository.findAll();
    }

    public void deleteGroup(Integer id){
        groupRepository.deleteById(id);
    }

}
