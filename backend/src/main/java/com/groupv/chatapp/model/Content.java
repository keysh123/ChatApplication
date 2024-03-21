package com.groupv.chatapp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String contentId;
    private String format;

    @Lob
    @Size(max = 100000)
    private byte[] data;

    @OneToOne(
            mappedBy = "groupImg"
    )
    private Group groupProfileImage;

    @OneToOne(
            mappedBy = "profileImg"
    )
    private User userProfileImg;

    @OneToOne(
            mappedBy = "content"
    )
    private ChatData chatContent;

    public Content(String format, byte[] data) {
        this.format = format;
        this.data = data;
    }
}
