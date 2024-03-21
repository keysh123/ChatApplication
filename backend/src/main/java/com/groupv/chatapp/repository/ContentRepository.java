package com.groupv.chatapp.repository;

import com.groupv.chatapp.model.Content;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository extends JpaRepository<Content,String> {

}
