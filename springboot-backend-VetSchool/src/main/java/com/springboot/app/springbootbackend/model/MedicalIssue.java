package com.springboot.app.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="medical_issues")
public class MedicalIssue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="medical_issue_id")
    private Integer medicalIssueId;

    @Column(name="animal_id", nullable = false)
    private Integer animalId;

    @ManyToOne
    @JoinColumn(name="animal_id", nullable=false, insertable = false, updatable = false)
    private AnimalLight animal;

    @Column(name="issue_name")
    private String issueName;

    @Column(name="current_status")
    private String currentStatus;

    @Column(name="open_date")
    private String openDate;

    @Column(name="close_date")
    private String closeDate;

    @Column(name="description")
    private String description;

    @OneToMany(mappedBy = "medicalIssueId")
    List<Comment> comments;

}
