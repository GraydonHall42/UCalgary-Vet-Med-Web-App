package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.ProfileImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProfileImageRepository extends JpaRepository<ProfileImage, Integer> {

    Optional<List<ProfileImage>> findProfileImagesByAnimalId(int id);

}
