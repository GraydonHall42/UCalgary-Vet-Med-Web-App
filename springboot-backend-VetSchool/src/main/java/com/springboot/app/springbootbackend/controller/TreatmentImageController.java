package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.TreatmentImage;
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

}
