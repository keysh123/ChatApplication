package com.groupv.chatapp.dto;

import com.groupv.chatapp.model.GroupRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroupParticipantDto {
    Integer groupId;
    List<String> username;
    GroupRole role;
}
