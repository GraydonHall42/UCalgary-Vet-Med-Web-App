package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="animal_medical_issues")
public class AnimalMedicalIssues {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer medicalIssueID;

    @Column(name="animalID", nullable = false)
    private Integer animalID;

    @Column(name = "issueName")
    private String issueName;

    @Column(name = "currentStatus")
    private String currentStatus;

    @Column(name = "openDate")
    private String openDate;

    @Column(name = "closeDate")
    private String closeDate;

    @Column(name = "description")
    private String description;

}
