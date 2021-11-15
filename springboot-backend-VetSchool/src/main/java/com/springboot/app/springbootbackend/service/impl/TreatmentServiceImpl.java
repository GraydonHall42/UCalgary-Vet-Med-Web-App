package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.repository.TreatmentRepository;
import com.springboot.app.springbootbackend.service.TreatmentService;
import org.springframework.stereotype.Service;

@Service
public class TreatmentServiceImpl implements TreatmentService {

    private TreatmentRepository treatmentRepository;

    public TreatmentServiceImpl(TreatmentRepository treatmentRepository) {
        super();
        this.treatmentRepository = treatmentRepository;
    }
}
