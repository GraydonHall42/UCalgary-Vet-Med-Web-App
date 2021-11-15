package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.service.TreatmentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/treatments")
public class TreatmentController {

    private TreatmentService treatmentService;

    public TreatmentController(TreatmentService treatmentService) {
        super();
        this.treatmentService = treatmentService;
    }
}
