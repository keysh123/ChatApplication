package com.groupv.chatapp.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.groupv.chatapp.model.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatDto implements Serializable {

    private Integer chatRoomId; //fk

    private String sender; //fk

    private String receiver; //fk

    private String text;

    private String format;
    private String contentName;
    private Integer contentId;

//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
    private LocalDateTime time ;

    public ChatDto(ChatData chatData){
        setChatRoomId(chatData.getChatRoomId().getChatRoomId());
        setSender(chatData.getSender().getUsername());
        setReceiver(chatData.getReceiver().getUsername());
        setText(chatData.getText());
        setFormat(chatData.getFormat());
//        setContentId(chatData.getContent().getContentId());
        setTime(chatData.getTime());
    }

    public ChatDto(ChatData chatData,String filename){
        this(chatData);
        setContentName(filename);
        setContentId(chatData.getContent().getContentId());
    }
}
