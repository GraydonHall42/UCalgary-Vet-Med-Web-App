package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.model.ProfileImage;
import com.springboot.app.springbootbackend.model.Weight;
import com.springboot.app.springbootbackend.service.ProfileImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<ProfileImage> saveProfileImage(@RequestBody ProfileImage profileImage){
        return new ResponseEntity<ProfileImage>(
                profileImageService.saveProfileImage(profileImage),
                HttpStatus.CREATED);
    }

    //READ all profile images
    @GetMapping
    public List<ProfileImage> getAllProfileImages(){
        return profileImageService.getAllProfileImages();
    }

    // build get profile image by id REST API
    // http://localhost:8080/api/profile-image/1
    @GetMapping("{id}")
    public ResponseEntity<ProfileImage> getProfileImageByID(@PathVariable("id") int profileImagesID) {
        return new ResponseEntity<ProfileImage>(profileImageService.getProfileImageById(profileImagesID), HttpStatus.OK);
    }

    // build get profile image by animal id REST API
    // http://localhost:8080/api/profile-image/1
    @GetMapping("/animalId/{id}")
    public List<ProfileImage> getProfileImageByAnimalID(@PathVariable("id") int id) {
        return profileImageService.getAllProfileImagesByAnimalId(id);
    }

    // build update profile image REST API
    // http://localhost:8080/api/profile-image/1
    @PutMapping("{id}")
    public ResponseEntity<ProfileImage> updateProfileImage(@PathVariable("id") int id
            , @RequestBody ProfileImage profileImage){
        return new ResponseEntity<ProfileImage>(profileImageService.updateProfileImage(profileImage, id), HttpStatus.OK);
    }

    // build delete profile image REST API
    // http://localhost:8080/api/profile-image/1
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProfileImage(@PathVariable("id") int id) {

        profileImageService.deleteProfileImage(id);

        return new ResponseEntity<String>("Weight deleted successfully!", HttpStatus.OK);
    }

    // Experimental file upload
    @PostMapping("/upload")
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
        String fileName = file.getOriginalFilename();

        try {
            file.transferTo(new File("C:\\Users\\deyli\\Documents\\School\\ENSF 607\\Newer Project\\final-project-uofeng607-248\\react-frontend-vetschool\\public\\images\\profileImages\\" + fileName));
        } catch(Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.ok("File uploaded successfully.");
    }
}
