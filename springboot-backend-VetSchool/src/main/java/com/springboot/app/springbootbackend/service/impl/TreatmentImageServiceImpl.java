package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.TreatmentImage;
import com.springboot.app.springbootbackend.model.Weight;
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

    @Override
    public TreatmentImage getTreatmentImageById(int id) {
        return treatmentImageRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("TreatmentImage", "Id", id));
    }

    @Override
    public TreatmentImage updateTreatmentImage(TreatmentImage treatmentImage, int id) {
        // check whether treatment image with given id exists in DB or not
        TreatmentImage existingTreatmentImage = treatmentImageRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("TreatmentImage", "Id", id));

        existingTreatmentImage.setTreatmentId(treatmentImage.getTreatmentId());
        existingTreatmentImage.setImage(treatmentImage.getImage());

        // save existing treatment image to DB
        treatmentImageRepository.save(existingTreatmentImage);
        return existingTreatmentImage;
    }

    @Override
    public void deleteTreatmentImage(int id) {

        // check whether a weight exist in a DB or not
        treatmentImageRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("TreatmentImage", "Id", id));

        treatmentImageRepository.deleteById(id);
    }

}
