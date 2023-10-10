package com.example.Compass;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainRestController {
    @GetMapping("")
    public String test2() {
        return "Spring Boot";
    }

}
