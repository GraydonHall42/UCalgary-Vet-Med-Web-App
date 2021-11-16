package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.Treatment;
import com.springboot.app.springbootbackend.model.TreatmentImage;

import java.util.List;

public interface TreatmentService {

    Treatment saveTreatment(Treatment treatment);
    List<Treatment> getAllTreatments();

}
