package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.ProfileImage;
import com.springboot.app.springbootbackend.model.Weight;
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

    @Override
    public ProfileImage getProfileImageById(int id) {
        return profileImageRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("ProfileImage", "Id", id));
    }

    @Override
    public ProfileImage updateProfileImage(ProfileImage profileImage, int id) {

        // check whether profile image with given id exists in DB or not
        ProfileImage existingProfileImage = profileImageRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("ProfileImage", "Id", id));

        existingProfileImage.setAnimalId(profileImage.getAnimalId());
        existingProfileImage.setDate(profileImage.getDate());
        existingProfileImage.setImage(profileImage.getImage());

        // save existing weight to DB
        profileImageRepository.save(existingProfileImage);
        return existingProfileImage;
    }

    @Override
    public void deleteProfileImage(int id) {

        // check whether a profile image exist in a DB or not
        profileImageRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("ProfileImage", "Id", id));

        profileImageRepository.deleteById(id);
    }
}
