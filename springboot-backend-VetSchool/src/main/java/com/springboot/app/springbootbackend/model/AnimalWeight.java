package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="animal_weight")
public class AnimalWeight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer weightID;

    @Column(name="animalID", nullable = false)
    private Integer animalID;

    @Column(name = "date")
    private String date;

    @Column(name = "weight")
    private String weight;

}
