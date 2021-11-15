package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.repository.TreatmentImageRepository;
import com.springboot.app.springbootbackend.repository.TreatmentRepository;
import com.springboot.app.springbootbackend.service.TreatmentImageService;
import org.springframework.stereotype.Service;

@Service
public class TreatmentImageServiceImpl implements TreatmentImageService {

    private TreatmentImageRepository treatmentImageRepository;

    public TreatmentImageServiceImpl(TreatmentImageRepository treatmentImageRepository) {
        super();
        this.treatmentImageRepository = treatmentImageRepository;
    }
}
