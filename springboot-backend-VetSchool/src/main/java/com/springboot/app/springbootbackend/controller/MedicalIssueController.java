package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.ClassroomBooking;
import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.service.MedicalIssueService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medical")
public class MedicalIssueController {

    private MedicalIssueService medicalIssueService;

    public MedicalIssueController(MedicalIssueService medicalIssueService) {
        super();
        this.medicalIssueService = medicalIssueService;
    }

    // CREATE new Medical issue
    @PostMapping()
    public ResponseEntity<MedicalIssue> saveMedicalIssue(@RequestBody MedicalIssue medicalIssue){
        return new ResponseEntity<MedicalIssue>(
                medicalIssueService.saveMedicalIssue(medicalIssue),
                HttpStatus.CREATED);
    }

    //READ all medical issues
    @GetMapping
    public List<MedicalIssue> getAllMedicalIssues(){
        return medicalIssueService.getAllMedicalIssues();
    }

}
