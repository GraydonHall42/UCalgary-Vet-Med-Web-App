package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.model.ProfileImage;
import com.springboot.app.springbootbackend.service.ProfileImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profile-image")
public class ProfileImageController {

    private ProfileImageService profileImageService;

    public ProfileImageController(ProfileImageService profileImageService) {
        super();
        this.profileImageService = profileImageService;
    }

    // CREATE new profile image
    @PostMapping()
    public ResponseEntity<ProfileImage> saveMedicalIssue(@RequestBody ProfileImage profileImage){
        return new ResponseEntity<ProfileImage>(
                profileImageService.saveProfileImage(profileImage),
                HttpStatus.CREATED);
    }

    //READ all profile images
    @GetMapping
    public List<ProfileImage> getAllProfileImages(){
        return profileImageService.getAllProfileImages();
    }
}
