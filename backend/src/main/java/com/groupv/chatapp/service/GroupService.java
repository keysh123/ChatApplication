package com.groupv.chatapp.service;

import com.groupv.chatapp.dto.GroupDto;
import com.groupv.chatapp.model.*;
import com.groupv.chatapp.repository.GroupParticipantRepository;
import com.groupv.chatapp.repository.GroupRepository;
import com.groupv.chatapp.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
    public Group addGroup(GroupDto groupDto, String username){
        System.out.println(username);
        User creator = userRepository.findByUsername(username).orElseThrow(()->new UsernameNotFoundException(username + " is not found"));
        Group group1 = Group.builder()
                .groupName(groupDto.getName())
                .description(groupDto.getDescription())
                .creator(
                        creator
                )
                .build();
       var savedGroup=groupRepository.save(group1);
      GroupParticipant  participant = GroupParticipant.builder()
                .groupId(savedGroup)
                .username(creator)
                .role(GroupRole.ADMIN)
                .joinedAt(LocalDateTime.now())
                .build();
      groupParticipantRepository.save(participant);
        return  savedGroup;
    }

    public Group updateDescription(Integer groupId,String description){
        Group group=groupRepository.findById(groupId).orElseThrow(()-> new IllegalArgumentException("Group not found"));
        group.setDescription(description);
        return groupRepository.save(group);
    }
    public Group updateName(Integer groupId,String name){
        Group group=groupRepository.findById(groupId).orElseThrow(()-> new IllegalArgumentException("Group not found"));
        group.setGroupName(name);
        return groupRepository.save(group);
    }

    public Group addGroupPhoto(Integer groupId, Content contentId){
        Group group=groupRepository.findById(groupId).orElseThrow(()-> new IllegalArgumentException("Group not found"));
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
