package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.ClassroomBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassroomBookingRepository extends JpaRepository<ClassroomBooking, Integer>{
}
