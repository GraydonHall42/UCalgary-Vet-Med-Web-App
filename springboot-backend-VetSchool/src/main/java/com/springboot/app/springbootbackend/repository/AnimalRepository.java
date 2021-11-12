package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnimalRepository extends JpaRepository<Animal, Integer>{
    List<Animal> findByAnimalType(String type);
}
