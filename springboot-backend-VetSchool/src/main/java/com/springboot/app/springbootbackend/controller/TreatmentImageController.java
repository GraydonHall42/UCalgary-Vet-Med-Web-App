package com.springboot.app.springbootbackend.controller;


import com.springboot.app.springbootbackend.service.TreatmentImageService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/treatment-images")
public class TreatmentImageController {

    private TreatmentImageService treatmentImageService;

    public TreatmentImageController(TreatmentImageService treatmentImageService) {
        super();
        this.treatmentImageService = treatmentImageService;
    }
}
