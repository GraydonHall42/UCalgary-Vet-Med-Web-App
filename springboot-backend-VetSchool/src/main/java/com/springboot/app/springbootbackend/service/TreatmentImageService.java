package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.ProfileImage;
import com.springboot.app.springbootbackend.model.TreatmentImage;

import java.util.List;

public interface TreatmentImageService {

    TreatmentImage saveTreatmentImage(TreatmentImage treatmentImage);
    List<TreatmentImage> getAllTreatmentImages();
    TreatmentImage getTreatmentImageById(int id);
    TreatmentImage updateTreatmentImage(TreatmentImage weight, int id);
    void deleteTreatmentImage(int id);
}
