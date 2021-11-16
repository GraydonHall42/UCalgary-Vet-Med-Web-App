package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.ClassroomBooking;
import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.repository.MedicalIssueRepository;
import com.springboot.app.springbootbackend.service.MedicalIssueService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalIssueServiceImpl implements MedicalIssueService {

    private MedicalIssueRepository medicalIssueRepository;

    public MedicalIssueServiceImpl(MedicalIssueRepository medicalIssueRepository) {
        super();
        this.medicalIssueRepository = medicalIssueRepository;
    }

    @Override
    public MedicalIssue saveMedicalIssue(MedicalIssue issue){
        return medicalIssueRepository.save(issue);
    }

    @Override
    public List<MedicalIssue> getAllMedicalIssues() {
        return medicalIssueRepository.findAll();
    }

    @Override
    public MedicalIssue getMedicalIssueById(Integer medicalIssueId) {
        return medicalIssueRepository.findById(medicalIssueId).orElseThrow(() ->
                new ResourceNotFoundException("Employee", "Id", medicalIssueId));
    }

}
