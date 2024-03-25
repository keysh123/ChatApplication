package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.GroupParticipantDto;
import com.groupv.chatapp.model.GroupParticipant;
import com.groupv.chatapp.service.GroupParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GroupParticipantController {
    @Autowired
    private GroupParticipantService groupParticipantService;
    @PostMapping("/participant")
    public void addParticipant(@RequestBody GroupParticipantDto participant){
         groupParticipantService.saveParticipant(participant);
    }


    @GetMapping("/participant/{groupId}")
    public List<GroupParticipant> show(@PathVariable Integer groupId){
        return groupParticipantService.find(groupId);
    }
    @PutMapping("/participant/{groupId}/{username}")
    public GroupParticipant show(@PathVariable Integer groupId,@PathVariable String username,@RequestBody String role){
        return groupParticipantService.updateRole(groupId,username,role);
    }
}
