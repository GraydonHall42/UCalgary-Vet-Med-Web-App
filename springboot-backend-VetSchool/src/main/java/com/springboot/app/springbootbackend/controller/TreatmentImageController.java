package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.TreatmentImage;
import com.springboot.app.springbootbackend.model.Weight;
import com.springboot.app.springbootbackend.service.TreatmentImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/treatment-images")
public class TreatmentImageController {

    private TreatmentImageService treatmentImageService;

    public TreatmentImageController(TreatmentImageService treatmentImageService) {
        super();
        this.treatmentImageService = treatmentImageService;
    }

    // CREATE new treatment image
    @PostMapping()
    public ResponseEntity<TreatmentImage> saveTreatment(@RequestBody TreatmentImage treatmentImage){
        return new ResponseEntity<TreatmentImage>(
                treatmentImageService.saveTreatmentImage(treatmentImage),
                HttpStatus.CREATED);
    }

    //READ all treatment images
    @GetMapping
    public List<TreatmentImage> getAllTreatmentImages(){
        return treatmentImageService.getAllTreatmentImages();
    }

    // build get treatmentImage by id REST API
    // http://localhost:8080/api/treatment-images/1
    @GetMapping("{id}")
    public ResponseEntity<TreatmentImage> getTreatmentImageByID(@PathVariable("id") int treatmentImageID) {
        return new ResponseEntity<TreatmentImage>(
                        treatmentImageService.getTreatmentImageById(treatmentImageID), HttpStatus.OK);
    }

    // build update treatmentImage REST API
    // http://localhost:8080/api/treatment-images/1
    @PutMapping("{id}")
    public ResponseEntity<TreatmentImage> updateTreatmentImage(@PathVariable("id") int id
            , @RequestBody TreatmentImage treatmentImage){
        return new ResponseEntity<TreatmentImage>(
                        treatmentImageService.updateTreatmentImage(treatmentImage, id), HttpStatus.OK);
    }

    // build delete treatmentImage REST API
    // http://localhost:8080/api/treatment-images/1
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTreatmentImage(@PathVariable("id") int id) {

        treatmentImageService.deleteTreatmentImage(id);

        return new ResponseEntity<String>("Weight deleted successfully!", HttpStatus.OK);
    }

}
