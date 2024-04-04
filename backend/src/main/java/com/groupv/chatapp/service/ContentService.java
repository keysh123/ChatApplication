package com.groupv.chatapp.service;

import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.repository.ContentRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;



@Service
@AllArgsConstructor
public class ContentService {
    private ContentRepository contentRepository;
    EntityManager entityManager;


    @Transactional
    public Integer saveContent(Content content) {
        entityManager.persist(content);
        return content.getContentId();
    }


}
