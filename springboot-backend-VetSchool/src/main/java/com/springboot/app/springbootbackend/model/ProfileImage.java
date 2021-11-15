package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="profile_images")
public class ProfileImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="photo_id", nullable = false)
    private Integer photoId;

    @Column(name="animal_id", nullable = false)
    private Integer animalId;

    @Column(name = "date")
    private String date;

    @Column(name = "image")
    private String image;

}
