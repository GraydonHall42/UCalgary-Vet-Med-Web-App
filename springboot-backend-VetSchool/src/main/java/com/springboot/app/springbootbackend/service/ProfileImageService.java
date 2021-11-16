package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.model.ProfileImage;

import java.util.List;

public interface ProfileImageService {

    ProfileImage saveProfileImage(ProfileImage profileImage);
    List<ProfileImage> getAllProfileImages();
}
