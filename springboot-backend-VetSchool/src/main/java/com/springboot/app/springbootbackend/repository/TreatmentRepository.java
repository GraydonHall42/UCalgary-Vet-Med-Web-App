package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Treatment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TreatmentRepository extends JpaRepository<Treatment, Integer> {
}
