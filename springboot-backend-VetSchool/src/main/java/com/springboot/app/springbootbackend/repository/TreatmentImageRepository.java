package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.TreatmentImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TreatmentImageRepository extends JpaRepository<TreatmentImage, Integer> {
}
