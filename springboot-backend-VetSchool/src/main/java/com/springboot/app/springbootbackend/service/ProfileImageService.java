package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.model.ProfileImage;
import com.springboot.app.springbootbackend.model.Weight;

import java.util.List;

public interface ProfileImageService {

    ProfileImage saveProfileImage(ProfileImage profileImage);
    List<ProfileImage> getAllProfileImages();
    ProfileImage getProfileImageById(int id);
    ProfileImage updateProfileImage(ProfileImage profileImage, int id);
    void deleteProfileImage(int id);
}
