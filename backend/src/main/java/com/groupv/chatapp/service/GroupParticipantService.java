package com.groupv.chatapp.service;

import com.groupv.chatapp.dto.GroupParticipantDto;
import com.groupv.chatapp.model.*;
import com.groupv.chatapp.repository.GroupParticipantRepository;
import com.groupv.chatapp.repository.GroupRepository;
import com.groupv.chatapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupParticipantService {
    @Autowired
    private GroupParticipantRepository groupParticipantRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private UserRepository userRepository;
    public void saveParticipant(GroupParticipantDto groupParticipant){
        GroupParticipant participant=null;
        Integer groupId= groupParticipant.getGroupId();
        List<String> username=groupParticipant.getUsername();
        for(int i=0;i<username.size();i++) {
            if(i==0) {
              participant = GroupParticipant.builder()
                        .groupId(groupRepository.findById(groupId).orElse(new Group()))
                        .username(userRepository.findById(username.get(i)).orElse(new User()))
                        .role(GroupRole.ADMIN)
                        .build();
            }
            else {
                 participant = GroupParticipant.builder()
                        .groupId(groupRepository.findById(i).orElse(new Group()))
                        .username(userRepository.findById(username.get(i)).orElse(new User()))
                        .role(GroupRole.PARTICIPANT)
                        .build();
            }
            groupParticipantRepository.save(participant);
        }

    }


    public List<GroupParticipant> find(Integer groupId){
        return groupParticipantRepository.findByGroupId(groupRepository.findById(groupId).orElse(new Group()));
    }

    public GroupParticipant updateRole(Integer groupId,String username,String role){
        GroupUserComposite groupUserComposite=GroupUserComposite.builder()
                .groupId(groupRepository.findById(groupId).orElse(new Group()))
                .username(userRepository.findById(username).orElse(new User()))
                .build();
        GroupParticipant groupParticipant=groupParticipantRepository.findById(groupUserComposite).orElse(new GroupParticipant());
        groupParticipant.setRole(GroupRole.valueOf(role));
        return groupParticipantRepository.save(groupParticipant);
    }
}
