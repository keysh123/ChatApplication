package com.groupv.chatapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer contentId;
    private String format;

    @Lob
    @Size(max = 100000)
    private byte[] data;

    @OneToOne(
            mappedBy = "groupImg"
    )
    private Group groupProfileImage;

    @OneToOne(
            mappedBy = "profileImg")
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