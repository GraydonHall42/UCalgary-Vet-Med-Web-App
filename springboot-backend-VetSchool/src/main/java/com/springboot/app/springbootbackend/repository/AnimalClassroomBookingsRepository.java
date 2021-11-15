package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.AnimalClassroomBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalClassroomBookingsRepository extends JpaRepository<AnimalClassroomBooking, Integer>{
}
