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
    public void addParticipants(@RequestBody GroupParticipantDto participant){
         groupParticipantService.saveParticipants(participant);
    }

    @GetMapping("/participant/{groupId}")
    public List<GroupParticipant> showParticipants(@PathVariable Integer groupId){
        return groupParticipantService.findParticipant(groupId);
    }

    @PutMapping("/participant/promote/{groupId}/{username}")
    public GroupParticipant promote(@PathVariable Integer groupId,@PathVariable String username){
        return groupParticipantService.promoteParticipant(groupId,username);
    }

    @PutMapping("/participant/demote/{groupId}/{username}")
    public GroupParticipant demote(@PathVariable Integer groupId,@PathVariable String username) {
        return groupParticipantService.DemoteParticipant(groupId, username);
    }

//    @PutMapping("/participant/{groupId}/{username}")
//    public GroupParticipant show(@PathVariable Integer groupId,@PathVariable String username,@RequestBody String role){
//        return groupParticipantService.updateRole(groupId,username,role);
//    }
}
