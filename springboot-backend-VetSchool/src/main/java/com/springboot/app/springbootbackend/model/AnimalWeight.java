package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="weight")
public class AnimalWeight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="weight_id", nullable = false)
    private Integer weightId;

    @Column(name="animal_id", nullable = false)
    private Integer animalId;

    @Column(name = "date")
    private String date;

    @Column(name = "weight")
    private String weight;

}
