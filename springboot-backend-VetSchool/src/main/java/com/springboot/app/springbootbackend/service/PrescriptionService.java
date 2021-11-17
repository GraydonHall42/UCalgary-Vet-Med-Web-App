package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.Prescription;
import com.springboot.app.springbootbackend.model.Weight;

import java.util.List;

public interface PrescriptionService {

    Prescription savePrescription(Prescription prescription);
    List<Prescription> getAllPrescriptions();
    Prescription getPrescriptionById(int id);
    Prescription updatePrescription(Prescription prescription, int id);
    void deletePrescription(int id);
    List<Prescription> getPrescriptionByAnimalId(int id);

}
