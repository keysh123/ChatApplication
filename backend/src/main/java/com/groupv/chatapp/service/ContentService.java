package com.groupv.chatapp.service;

import com.groupv.chatapp.model.Content;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ContentService {

    EntityManager entityManager;



    @Transactional
    public Integer saveContent(Content content){
        entityManager.persist(content);
        return content.getContentId();
    }
}
