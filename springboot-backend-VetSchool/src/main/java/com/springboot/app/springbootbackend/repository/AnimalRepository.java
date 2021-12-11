package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnimalRepository extends JpaRepository<Animal, Integer>{

    List<Animal> findByAnimalTypeContaining(String type);
    List<Animal> findByAnimalNameContaining(String name);

}
