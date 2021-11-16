package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.model.ProfileImage;
import com.springboot.app.springbootbackend.repository.ProfileImageRepository;
import com.springboot.app.springbootbackend.service.ProfileImageService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileImageServiceImpl implements ProfileImageService {

    private ProfileImageRepository profileImageRepository;

    public ProfileImageServiceImpl(ProfileImageRepository profileImageRepository) {
        super();
        this.profileImageRepository = profileImageRepository;
    }

    @Override
    public ProfileImage saveProfileImage(ProfileImage profileImage) {
        return profileImageRepository.save(profileImage);
    }

    @Override
    public List<ProfileImage> getAllProfileImages() {
        return profileImageRepository.findAll();
    }
}
