package com.groupv.chatapp.dto;


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
    private Integer chatId;

    private Integer chatRoomId; //fk

    private String sender; //fk

    private String receiver; //fk

    private String text;

    private ContentDto content;

//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
    private LocalDateTime time ;

    public ChatDto(ChatData chatData){
        setChatId(chatData.getChatId());
        setChatRoomId(chatData.getChatRoom().getChatRoomId());
        setSender(chatData.getSender().getUsername());
        setReceiver(chatData.getReceiver().getUsername());
        setText(chatData.getText());
//        setContentId(chatData.getContent().getContentId());
        setTime(chatData.getTime());
    }

    public ChatDto(ChatData chatData,Content content){
        this(chatData);
        if(content!=null) setContent(new ContentDto(content));
    }

//    public ChatDto(ChatData chatData,Integer contentId,String format){
//        this(chatData);
//        if(content!=null) setContent(new ContentDto(contentId,format));
//    }

    public ChatDto(ChatData chatData,String filename){
        this(chatData);
        setContent(new ContentDto(chatData.getContent()));
    }
}
