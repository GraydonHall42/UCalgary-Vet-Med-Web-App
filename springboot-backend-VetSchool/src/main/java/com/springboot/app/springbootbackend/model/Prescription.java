package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="prescription")
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="prescription_id", nullable = false)
    private Integer prescriptionId;

    @Column(name="animal_id", nullable = false)
    private Integer animalId;

    @Column(name = "date")
    private String date;

    @Column(name = "medicine")
    private String medicine;

    @Column(name = "directions")
    private String directions;

}
