package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Weight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeightRepository extends JpaRepository<Weight, Integer> {
}
