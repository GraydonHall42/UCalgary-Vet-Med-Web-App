package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="animal_classroom_bookings")
public class AnimalClassroomBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookingID;


    @Column(name = "bookingDate")
    private String bookingDate;

    @Column(name = "startTime")
    private String startTime;

    @Column(name = "returnTime")
    private String returnTime;

    @Column(name = "approvalStatus")
    private String approvalStatus;

    @ManyToOne()
    @JoinColumn(name = "animalID")  // give the name in this table
    private Animal animalID;

    @ManyToOne()
    @JoinColumn(name = "teacherID")  // give the name in this table
    private User teacherID;

    @ManyToOne()
    @JoinColumn(name = "approveeID")  // give the name in this table
    private User approveeID;

}
