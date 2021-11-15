package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.repository.ProfileImageRepository;
import com.springboot.app.springbootbackend.service.ProfileImageService;
import org.springframework.stereotype.Service;

@Service
public class ProfileImageServiceImpl implements ProfileImageService {

    private ProfileImageRepository profileImageRepository;

    public ProfileImageServiceImpl(ProfileImageRepository profileImageRepository) {
        super();
        this.profileImageRepository = profileImageRepository;
    }
}
