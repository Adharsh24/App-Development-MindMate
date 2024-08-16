package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.service.UsersService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/users")
    public User registerUser(@RequestBody User user) {
        return usersService.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return usersService.getAllUsers();
    }

    @GetMapping("/login/{email}/{password}")
    public Optional<User> getCredential(@PathVariable String email, @PathVariable String password) {
        return usersService.findUser(email, password);
    }
}
