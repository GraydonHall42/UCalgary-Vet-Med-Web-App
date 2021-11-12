package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.AnimalWeight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalWeightRepository extends JpaRepository<AnimalWeight, Integer> {
}
