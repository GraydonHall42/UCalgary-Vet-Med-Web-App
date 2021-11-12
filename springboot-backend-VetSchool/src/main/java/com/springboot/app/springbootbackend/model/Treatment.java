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
    private Integer treatmentID;

    @Column(name="issueID", nullable = false)
    private Integer issueID;

    @Column(name="animalID", nullable = false)
    private Integer animalID;

    @Column(name = "title")
    private String title;

    @Column(name = "date")
    private String date;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "treatmentID")
    List<TreatmentImages> treatmentImages;

    @ManyToOne()
    @JoinColumn(name = "userID")
    User author;

}
