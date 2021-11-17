package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.Prescription;
import com.springboot.app.springbootbackend.model.Weight;
import com.springboot.app.springbootbackend.service.PrescriptionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prescription")
public class PrescriptionController {

    private PrescriptionService prescriptionService;

    public PrescriptionController(PrescriptionService prescriptionService) {
        super();
        this.prescriptionService = prescriptionService;
    }

    // CREATE new prescription
    @PostMapping()
    public ResponseEntity<Prescription> saveTreatment(@RequestBody Prescription prescription){
        return new ResponseEntity<Prescription>(
                prescriptionService.savePrescription(prescription),
                HttpStatus.CREATED);
    }

    //READ all prescription
    @GetMapping
    public List<Prescription> getAllPrescriptions(){
        return prescriptionService.getAllPrescriptions();
    }

    // build get prescription by id REST API
    // http://localhost:8080/api/prescription/1
    @GetMapping("{id}")
    public ResponseEntity<Prescription> getPrescriptionByID(@PathVariable("id") int weightID) {
        return new ResponseEntity<Prescription>(prescriptionService.getPrescriptionById(weightID), HttpStatus.OK);
    }

    // build update prescription REST API
    // http://localhost:8080/api/prescription/1
    @PutMapping("{id}")
    public ResponseEntity<Prescription> updatePrescription(@PathVariable("id") int id
                                                    , @RequestBody Prescription weight){
        return new ResponseEntity<Prescription>(prescriptionService.updatePrescription(weight, id), HttpStatus.OK);
    }

    // build delete prescription REST API
    // http://localhost:8080/api/prescription/1
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePrescription(@PathVariable("id") int id) {

        prescriptionService.deletePrescription(id);

        return new ResponseEntity<String>("Prescription deleted successfully!", HttpStatus.OK);
    }

    @GetMapping("/animalid/{id}")
    public List<Prescription> getWeightByAnimalID(@PathVariable("id") int id) {
        return prescriptionService.getPrescriptionByAnimalId(id);
    }


}
