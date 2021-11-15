package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.repository.TreatmentRepository;
import org.springframework.stereotype.Service;

@Service
public class TreatmentServiceImpl {

    private TreatmentRepository treatmentRepository;

    public TreatmentServiceImpl(TreatmentRepository treatmentRepository) {
        super();
        this.treatmentRepository = treatmentRepository;
    }
}
