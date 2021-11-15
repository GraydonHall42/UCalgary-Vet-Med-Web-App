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

    @Column(name = "approval_status")
    private String approvalStatus;

    @ManyToOne()
    @JoinColumn(name = "animal_id")  // give the name in this table
    private Animal animalId;

    @ManyToOne()
    @JoinColumn(name = "teacher_id")  // give the name in this table
    private User teacherId;

    @ManyToOne()
    @JoinColumn(name = "approvee_id")  // give the name in this table
    private User approveeId;

}
