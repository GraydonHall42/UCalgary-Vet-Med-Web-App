package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnimalRepository extends JpaRepository<Animal, Integer>{

    List<Animal> findByAnimalType(String type);

    // tried alternate way to do it
//    @Query("select a from animal a where a.Animal_Type = ?1")
//    List<Animal> findByAnimalType(String type);

}
