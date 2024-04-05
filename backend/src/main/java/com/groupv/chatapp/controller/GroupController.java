package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.GroupDto;
import com.groupv.chatapp.model.*;
import com.groupv.chatapp.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GroupController {
    private final GroupService groupService;

    @PostMapping("/group")
    public Group saveGroup(
            @RequestBody GroupDto groupDto,
            @RequestAttribute("username") String username
    ) {
        return groupService.addGroup(groupDto,username);
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
