package com.groupv.chatapp.controller;

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

    @PutMapping("/group/{groupId}")
    public Group updateName(@PathVariable Integer groupId,@RequestBody String name){
        return groupService.updateName(groupId,name);
    }
    @PutMapping("/group/description/{groupId}")
    public Group updateDescription(@PathVariable Integer groupId,@RequestBody String description){
        return groupService.updateDescription(groupId,description);
    }
    @DeleteMapping("group/{groupId}")
    public void delete(@PathVariable Integer groupId){
        groupService.deleteGroup(groupId);
    }
}
