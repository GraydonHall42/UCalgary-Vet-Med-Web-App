package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.ProfileImage;
import com.springboot.app.springbootbackend.model.Treatment;
import com.springboot.app.springbootbackend.service.TreatmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/treatments")
public class TreatmentController {

    private TreatmentService treatmentService;

    public TreatmentController(TreatmentService treatmentService) {
        super();
        this.treatmentService = treatmentService;
    }

    // CREATE new treatment
    @PostMapping()
    public ResponseEntity<Treatment> saveTreatment(@RequestBody Treatment treatment){
        return new ResponseEntity<Treatment>(
                treatmentService.saveTreatment(treatment),
                HttpStatus.CREATED);
    }

    //READ all treatment
    @GetMapping
    public List<Treatment> getAllTreatments(){
        return treatmentService.getAllTreatments();
    }
}
