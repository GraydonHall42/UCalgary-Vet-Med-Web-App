package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalRepository extends JpaRepository<Animal, Integer>{

}
