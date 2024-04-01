package com.groupv.chatapp.controller;

import com.groupv.chatapp.dto.SuccessDto;
import com.groupv.chatapp.exception.DoesNotExistException;
import com.groupv.chatapp.model.Content;
import com.groupv.chatapp.repository.ContentRepository;
import com.groupv.chatapp.service.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

@CrossOrigin(originPatterns = "**",allowCredentials = "true")
@Controller
@RequiredArgsConstructor
public class ContentController {
    @Autowired
    private ContentRepository contentRepository;
    @Autowired
    private ContentService contentService;

    @GetMapping("/content/{id}")
    public ResponseEntity<?> sendContent(
            @PathVariable Integer id
    ) throws DoesNotExistException {
        Content content = contentRepository.findById(id).orElseThrow(()->new DoesNotExistException("Content does not exist"));
        System.out.println(content.getContentId());
        // Retrieve the BLOB data as an input stream
        InputStream inputStream = new ByteArrayInputStream(content.getData());

        // Return the input stream as part of the response body
        InputStreamResource inputStreamResource = new InputStreamResource(inputStream);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(inputStreamResource);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImg(@RequestParam("file") MultipartFile file) throws IOException {
        System.out.println(file.getOriginalFilename());
        System.out.println("sdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"+file);

        int id = contentService.saveContent(new Content(file.getOriginalFilename(),file.getContentType(), file.getBytes()));

        return new ResponseEntity<>(new SuccessDto(HttpStatus.OK.value(),id),HttpStatus.OK);
    }
}
