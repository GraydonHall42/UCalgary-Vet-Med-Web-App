package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="classroom_bookings")
public class ClassroomBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Integer bookingId;

    @Column(name = "booking_date")
    private String bookingDate;

    @Column(name = "start_time")
    private String startTime;

    @Column(name = "return_time")
    private String returnTime;

    @Column(name = "admin_app_status")
    private String adminAppStatus;

    @Column(name = "tech_app_status")
    private String TechAppStatus;

    @ManyToOne()
    @JoinColumn(name = "animal_id")  // give the name in this table
    private Animal animalId;

    @ManyToOne()
    @JoinColumn(name = "teacher_id")  // give the name in this table
    private User teacherId;

    @ManyToOne()
    @JoinColumn(name = "admin_app_id")  // give the name in this table
    private User adminAppId;

    @ManyToOne()
    @JoinColumn(name = "tech_app_id")  // give the name in this table
    private User techAppId;

}
