package com.groupv.chatapp.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
//@RequestMapping("/api/v1/demo")
public class DemoController {
    @GetMapping("/api/v1/demo")
    @ResponseStatus(HttpStatus.OK)
    public String sayHello(){
        return "Hello from server";
    }
}
