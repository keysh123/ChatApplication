package com.groupv.chatapp.controller;

import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContentController {
    @Autowired
    private ContentService contentService;
}
