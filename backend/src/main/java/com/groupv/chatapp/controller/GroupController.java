package com.groupv.chatapp.controller;

import com.groupv.chatapp.model.Group;
import com.groupv.chatapp.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
