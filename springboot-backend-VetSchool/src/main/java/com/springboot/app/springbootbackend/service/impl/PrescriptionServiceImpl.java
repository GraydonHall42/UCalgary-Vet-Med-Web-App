package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.Prescription;
import com.springboot.app.springbootbackend.model.Weight;
import com.springboot.app.springbootbackend.repository.PrescriptionRepository;
import com.springboot.app.springbootbackend.service.PrescriptionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrescriptionServiceImpl implements PrescriptionService {

    private PrescriptionRepository prescriptionRepository;

    public PrescriptionServiceImpl(PrescriptionRepository prescriptionRepository) {
        super();
        this.prescriptionRepository = prescriptionRepository;
    }

    @Override
    public Prescription savePrescription(Prescription weight) {
        return prescriptionRepository.save(weight);
    }

    @Override
    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }

    @Override
    public Prescription getPrescriptionById(int id) {
        return prescriptionRepository.findById(id).orElseThrow(() ->
                    new ResourceNotFoundException("Weight", "Id", id));
    }

    @Override
    public Prescription updatePrescription(Prescription prescription, int id) {

        // check whether weight with given id exists in DB or not
        Prescription existingPrescription = prescriptionRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Prescription", "Id", id));

        existingPrescription.setAnimalId(prescription.getAnimalId());
        existingPrescription.setMedicine(prescription.getMedicine());
        existingPrescription.setDate(prescription.getDate());
        existingPrescription.setDirections(prescription.getDirections());

        // save existing weight to DB
        prescriptionRepository.save(existingPrescription);
        return existingPrescription;
    }

    @Override
    public void deletePrescription(int id) {

        // check whether a weight exist in a DB or not
        prescriptionRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Prescription", "Id", id));

        prescriptionRepository.deleteById(id);
    }

    @Override
    public List<Prescription> getPrescriptionByAnimalId(int id) {
        return prescriptionRepository.findAllByAnimalId(id).orElseThrow(() ->
                new ResourceNotFoundException("Weight", "AnimalId", id));
    }

}
