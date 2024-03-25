package com.groupv.chatapp.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GroupUserComposite implements Serializable {
    User username;
    Group groupId;
}
