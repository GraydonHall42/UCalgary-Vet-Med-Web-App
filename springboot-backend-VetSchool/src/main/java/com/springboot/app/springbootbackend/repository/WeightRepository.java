package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Weight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface WeightRepository extends JpaRepository<Weight, Integer> {


    Optional<List<Weight>> findAllByAnimalId(int animalID);

    // identical to above
    @Query(value="select * from weight where weight.animal_id=?1 and weight.date=?2", nativeQuery=true)
    Optional<List<Weight>> loggers(int id, String date);

}
