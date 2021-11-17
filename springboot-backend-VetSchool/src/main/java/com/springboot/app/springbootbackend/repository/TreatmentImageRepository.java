package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.ProfileImage;
import com.springboot.app.springbootbackend.model.TreatmentImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TreatmentImageRepository extends JpaRepository<TreatmentImage, Integer> {
}
