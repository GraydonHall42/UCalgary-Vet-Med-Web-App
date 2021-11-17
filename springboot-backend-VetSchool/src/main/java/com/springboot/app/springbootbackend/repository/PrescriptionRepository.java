package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Prescription;
import com.springboot.app.springbootbackend.model.Weight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PrescriptionRepository extends JpaRepository<Prescription, Integer> {


    Optional<List<Prescription>> findAllByAnimalId(int animalID);

    // identical to above
    @Query(value="select * from prescription where prescription.animal_id=?1 and prescription.date=?2", nativeQuery=true)
    Optional<List<Prescription>> loggers(int id, String date);

}
