package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="animal_medical_issues")
public class MedicalIssue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="medical_issue_id")
    private Integer medicalIssueId;

    @Column(name="AnimalID", nullable = false)
    private Integer animalID;

    @Column(name="IssueName")
    private String issueName;

    @Column(name="CurrentStatus")
    private String currentStatus;

    @Column(name="OpenDate")
    private String openDate;

    @Column(name="CloseDate")
    private String closeDate;

    @Column(name="Description")
    private String description;

    @OneToMany(mappedBy = "MedicalIssueId")
    List<Treatment> treatments;

}
