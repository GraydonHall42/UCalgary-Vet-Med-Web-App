package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.ClassroomBooking;
import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.model.User;

import java.util.List;

public interface MedicalIssueService {

    MedicalIssue saveMedicalIssue(MedicalIssue issue);
    List<MedicalIssue> getAllMedicalIssues();
    MedicalIssue getMedicalIssueById(Integer medicalIssueId);
    MedicalIssue updateMedicalIssue(MedicalIssue medicalIssue, int id);
    void deleteMedicalIssue(int id);
    List<MedicalIssue> getActiveMedicalIssues();

}
