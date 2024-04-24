package com.groupv.chatapp.dto;


import com.groupv.chatapp.model.ContentType;
import com.groupv.chatapp.model.GroupChatData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroupChatDto {

    private Integer groupId; //fk

    private String sender; //fk

    private String text;

    private ContentType contentType;

    //    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
    private LocalDateTime time ;

    public GroupChatDto(GroupChatData chatData){
        setGroupId(chatData.getGroupId().getGroupId());
        setSender(chatData.getSender().getUsername());
        setText(chatData.getText());
        setContentType(chatData.getContentType());
        setTime(chatData.getTime());

    }
}
