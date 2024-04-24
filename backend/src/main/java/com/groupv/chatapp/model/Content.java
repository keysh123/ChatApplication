package com.groupv.chatapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer contentId;
    private String format;
    private String fileName;

    @Lob
//    @Size(max = 10485760)
    @Column(length = 16777215)
    private byte[] data;

    @OneToOne(
            mappedBy = "groupImg"
    )
    @JsonIgnore
    private Group groupProfileImage;

    @OneToOne(
            mappedBy = "profileImg")
    @JsonIgnore
    private User userProfileImg;

    @OneToOne(
            mappedBy = "content"
    )
    @JsonIgnore
    private ChatData chatContent;

    public Content(String format, byte[] data) {
        this.format = format;
        this.data = data;
    }

    public Content(String fileName,String format, byte[] data) {
        this.fileName = fileName;
        this.format = format;
        this.data = data;
    }
}
