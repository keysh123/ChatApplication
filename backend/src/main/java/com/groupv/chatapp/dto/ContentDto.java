package com.groupv.chatapp.dto;

import com.groupv.chatapp.model.Content;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContentDto implements Serializable {
    Integer id;
    String format;
    String filename;
    public ContentDto(Content content){
        if(content!=null) {
            setId(content.getContentId());
            setFormat(content.getFormat());
            setFilename(content.getFileName());
        }
    }
}
