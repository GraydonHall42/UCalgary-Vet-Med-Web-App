package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.ClassroomBooking;
import com.springboot.app.springbootbackend.model.MedicalIssue;

import java.util.List;

public interface MedicalIssueService {

    MedicalIssue saveMedicalIssue(MedicalIssue issue);
    List<MedicalIssue> getAllMedicalIssues();
    MedicalIssue getIssueById(Integer id);

}
