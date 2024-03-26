package com.groupv.chatapp.controller;

import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.model.Group;
import com.groupv.chatapp.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GroupController  {
    @Autowired
    private GroupService groupService;

    @PostMapping("/group")
    public Group saveGroup(@RequestBody Group group){
        return groupService.addGroup(group);
    }

    @GetMapping("/group")
    public List<Group> saveGroup(){
        return groupService.findAllGroups();
    }

    @PutMapping("/group/name/{groupId}")
    public Group updateName(@PathVariable Integer groupId,@RequestBody String name){
        return groupService.updateName(groupId,name);
    }
    @PutMapping("/group/description/{groupId}")
    public Group updateDescription(@PathVariable Integer groupId,@RequestBody String description){
        return groupService.updateDescription(groupId,description);
    }
    @PutMapping("/group/profilePhoto/{groupId}")
    public Group updateProfilePhoto(@PathVariable Integer groupId, @RequestBody Content content){
        return groupService.addGroupPhoto(groupId,content);
    }
    @DeleteMapping("group/{groupId}")
    public void delete(@PathVariable Integer groupId){
        groupService.deleteGroup(groupId);
    }
}
