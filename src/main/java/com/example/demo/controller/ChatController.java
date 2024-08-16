package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    @GetMapping("/api/chat")
    public String getChatResponse(@RequestParam String question) {
        // Placeholder response logic
        return "You asked: " + question;
    }
}
