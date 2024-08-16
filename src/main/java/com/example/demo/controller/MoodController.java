package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.MoodDescription;
import com.example.demo.model.MoodRequest;

@RestController
@RequestMapping("/describeMood")
public class MoodController {

    private final RestTemplate restTemplate;

    public MoodController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @PostMapping
    public MoodDescription getMoodDescription(@RequestBody MoodRequest moodRequest) {
        String url = "http://localhost:8080//describeMood"; // replace with the actual endpoint
        @SuppressWarnings("unused")
        String apiKey = "AIzaSyCZd6hR6bMVQoWVXOQssFvUi6gTME51XZg"; // replace with your Gemini API key

        // Construct request payload for Gemini API
        String payload = String.format("{\"mood\": \"%s\", \"rating\": %d}", moodRequest.getMood(), moodRequest.getRating());

        // Make the API call
        String response = restTemplate.postForObject(url, payload, String.class);

        // Process and return the response
        return new MoodDescription(response);
    }
}
