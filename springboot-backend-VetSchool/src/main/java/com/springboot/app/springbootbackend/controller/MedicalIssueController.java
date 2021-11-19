package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.ClassroomBooking;
import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.model.User;
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

    @GetMapping("{id}")
    public ResponseEntity<MedicalIssue> getMedicalIssueByID(@PathVariable("id") int medicalIssueId){
        return new ResponseEntity<MedicalIssue>(medicalIssueService.getMedicalIssueById(medicalIssueId), HttpStatus.OK);
    }

    // build update employee REST API
    // http://localhost:8080/api/users/1
    @PutMapping("{id}")
    public ResponseEntity<MedicalIssue> updateMedicalIssue(@PathVariable("id") int id
            , @RequestBody MedicalIssue medicalIssue){
        return new ResponseEntity<MedicalIssue>(medicalIssueService.updateMedicalIssue(medicalIssue, id), HttpStatus.OK);
    }

    // build delete employee REST API
    // http://localhost:8080/api/users/1
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMedicalIssue(@PathVariable("id") int id){

        // delete employee from DB
        medicalIssueService.deleteMedicalIssue(id);

        return new ResponseEntity<String>("Medical Issue deleted successfully!.", HttpStatus.OK);
    }

}
