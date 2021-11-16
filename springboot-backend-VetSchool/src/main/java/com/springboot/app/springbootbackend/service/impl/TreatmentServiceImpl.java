package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.model.Treatment;
import com.springboot.app.springbootbackend.repository.TreatmentRepository;
import com.springboot.app.springbootbackend.service.TreatmentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreatmentServiceImpl implements TreatmentService {

    private TreatmentRepository treatmentRepository;

    public TreatmentServiceImpl(TreatmentRepository treatmentRepository) {
        super();
        this.treatmentRepository = treatmentRepository;
    }

    @Override
    public Treatment saveTreatment(Treatment treatment) {
        return treatmentRepository.save(treatment);
    }

    @Override
    public List<Treatment> getAllTreatments() {
        return treatmentRepository.findAll();
    }
}
