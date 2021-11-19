package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.ClassroomBooking;
import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.model.User;
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

    @Override
    public MedicalIssue updateMedicalIssue(MedicalIssue medicalIssue, int id) {
        // we need to check whether employee with given id is exist in DB or not
        MedicalIssue existingMedicalIssue = medicalIssueRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("MedicalIssue", "Id", id));

        existingMedicalIssue.setAnimalId(medicalIssue.getAnimalId());
        existingMedicalIssue.setIssueName(medicalIssue.getIssueName());
        existingMedicalIssue.setCurrentStatus(medicalIssue.getCurrentStatus());
        existingMedicalIssue.setOpenDate(medicalIssue.getOpenDate());
        existingMedicalIssue.setCloseDate(medicalIssue.getCloseDate());
        existingMedicalIssue.setDescription(medicalIssue.getDescription());

        // save existing employee to DB
        medicalIssueRepository.save(existingMedicalIssue);
        return existingMedicalIssue;
    }

    @Override
    public void deleteMedicalIssue(int id) {
        medicalIssueRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("MedicalIssue", "Id", id));
        medicalIssueRepository.deleteById(id);

    }

}
