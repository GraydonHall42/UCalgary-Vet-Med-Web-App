package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="treatment_images")
public class TreatmentImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer treatmentphotoID;

    @Column(name="treatmentID", nullable = false)
    private Integer treatmentID;

    @Column(name = "image")
    private String image;

}
