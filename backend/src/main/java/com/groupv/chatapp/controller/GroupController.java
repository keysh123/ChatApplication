package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.GroupDto;
import com.groupv.chatapp.exception.DoesNotExistException;
import com.groupv.chatapp.model.*;
import com.groupv.chatapp.repository.GroupParticipantRepository;
import com.groupv.chatapp.repository.GroupRepository;
import com.groupv.chatapp.repository.UserRepository;
import com.groupv.chatapp.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class GroupController {
    @Autowired
    private GroupService groupService;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GroupParticipantRepository groupParticipantRepository;

    @PostMapping("/group")
    public Group saveGroup(
            @RequestBody GroupDto groupDto,
            @RequestAttribute("username") String username
    ) throws DoesNotExistException {
        User creator = userRepository.findByUsername(username).orElseThrow(()->new UsernameNotFoundException(username + " is not found"));
        Group group = Group.builder()
                .groupName(groupDto.getName())
                .description(groupDto.getDescription())
                .creator(
                      creator
                )
                .build();
        Group savedGroup = groupService.addGroup(group,username);
        GroupParticipant groupParticipant = GroupParticipant.builder()
                .groupId(savedGroup)
                .username(creator)
                .role(GroupRole.ADMIN)
                .joinedAt(LocalDateTime.now())
                .build();
        GroupParticipant p = groupParticipantRepository.save(
                groupParticipant
        );
        savedGroup = groupRepository.findById(savedGroup.getGroupId()).orElseThrow(()->new DoesNotExistException("Does not exist"));
        System.out.println(savedGroup.getCreator());
        return savedGroup;
    }

    @GetMapping("/group")
    public List<Group> saveGroup() {
        return groupService.findAllGroups();
    }

    @PutMapping("/group/name/{groupId}")
    public Group updateName(@PathVariable Integer groupId, @RequestBody String name) {
        return groupService.updateName(groupId, name);
    }

    @PutMapping("/group/description/{groupId}")
    public Group updateDescription(@PathVariable Integer groupId, @RequestBody String description) {
        return groupService.updateDescription(groupId, description);
    }

    @PutMapping("/group/profilePhoto/{groupId}")
    public Group updateProfilePhoto(@PathVariable Integer groupId, @RequestBody Content content) {
        return groupService.addGroupPhoto(groupId, content);
    }

    @DeleteMapping("group/{groupId}")
    public void delete(@PathVariable Integer groupId) {
        groupService.deleteGroup(groupId);
    }
}
