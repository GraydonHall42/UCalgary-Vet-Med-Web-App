package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="treatment_images")
public class TreatmentImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="treatment_photo_id", nullable = false)
    private Integer treatmentphotoId;

    @Column(name="treatment_id", nullable = false)
    private Integer treatmentId;

    @Column(name = "image")
    private String image;

}
