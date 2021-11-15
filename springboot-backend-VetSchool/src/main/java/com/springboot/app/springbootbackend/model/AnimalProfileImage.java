package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="animal_profile_images")
public class AnimalProfileImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer photoID;

    @Column(name="animalID", nullable = false)
    private Integer animalID;

    @Column(name = "date")
    private String date;

    @Column(name = "image")
    private String image;

}
