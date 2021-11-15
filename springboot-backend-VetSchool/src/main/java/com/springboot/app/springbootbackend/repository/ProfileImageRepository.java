package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.ProfileImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileImageRepository extends JpaRepository<ProfileImage, Integer> {
}
