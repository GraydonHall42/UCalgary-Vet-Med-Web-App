package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.service.ProfileImageService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/profile-image")
public class ProfileImageController {

    private ProfileImageService profileImageService;

    public ProfileImageController(ProfileImageService profileImageService) {
        super();
        this.profileImageService = profileImageService;
    }
}
