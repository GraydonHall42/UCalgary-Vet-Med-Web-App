package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.model.TreatmentImage;
import com.springboot.app.springbootbackend.repository.TreatmentImageRepository;
import com.springboot.app.springbootbackend.repository.TreatmentRepository;
import com.springboot.app.springbootbackend.service.TreatmentImageService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreatmentImageServiceImpl implements TreatmentImageService {

    private TreatmentImageRepository treatmentImageRepository;

    public TreatmentImageServiceImpl(TreatmentImageRepository treatmentImageRepository) {
        super();
        this.treatmentImageRepository = treatmentImageRepository;
    }

    @Override
    public TreatmentImage saveTreatmentImage(TreatmentImage treatmentImage) {
        return treatmentImageRepository.save(treatmentImage);
    }

    @Override
    public List<TreatmentImage> getAllTreatmentImages() {
        return treatmentImageRepository.findAll();
    }
}
