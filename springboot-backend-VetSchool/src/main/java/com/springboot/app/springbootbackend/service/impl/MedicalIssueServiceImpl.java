package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.repository.MedicalIssueRepository;
import com.springboot.app.springbootbackend.service.MedicalIssueService;
import org.springframework.stereotype.Service;

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
    public MedicalIssue getIssueById(Integer id) {
        return null;
    }


}
