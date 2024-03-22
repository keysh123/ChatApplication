package com.groupv.chatapp.service;

import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.model.Group;
import com.groupv.chatapp.repository.GroupRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GroupService {
    @Autowired
    private GroupRepository groupRepository;

    public Group addGroup(Group group){
        return groupRepository.save(group);
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

}
