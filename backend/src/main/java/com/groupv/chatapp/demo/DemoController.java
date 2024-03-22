package com.groupv.chatapp.demo;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
//@RequestMapping("/api/v1/demo")
public class DemoController {
    @GetMapping("/api/v1/demo")
    @ResponseStatus(HttpStatus.OK)
    public String sayHello(
            HttpServletRequest request,
            @RequestAttribute String username
    ){
        return username;
    }
}
