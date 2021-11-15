package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="treatment")
public class Treatment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="treatment_id", nullable = false)
    private Integer treatmentId;

    @Column(name="medical_issue_id", nullable = false)
    private Integer medicalIssueId;

    @Column(name = "title")
    private String title;

    @Column(name = "date")
    private String date;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "treatmentId")
    List<TreatmentImage> treatmentImages;

    @ManyToOne()
    @JoinColumn(name = "author_id")  // give the name in this table
    private User author;

}
