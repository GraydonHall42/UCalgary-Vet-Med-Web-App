package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Animal;
import com.springboot.app.springbootbackend.model.AnimalClassroomBookings;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnimalClassroomBookingsRepository extends JpaRepository<AnimalClassroomBookings, Integer>{
}
