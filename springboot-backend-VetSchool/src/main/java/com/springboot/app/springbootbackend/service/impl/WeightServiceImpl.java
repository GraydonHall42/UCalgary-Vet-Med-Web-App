package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.Weight;
import com.springboot.app.springbootbackend.repository.WeightRepository;
import com.springboot.app.springbootbackend.service.WeightService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WeightServiceImpl implements WeightService {

    private WeightRepository weightRepository;

    public WeightServiceImpl(WeightRepository weightRepository) {
        super();
        this.weightRepository = weightRepository;
    }

    @Override
    public Weight saveWeight(Weight weight) {
        return weightRepository.save(weight);
    }

    @Override
    public List<Weight> getAllWeights() {
        return weightRepository.findAll();
    }

    @Override
    public Weight getWeightById(int id) {
        return weightRepository.findById(id).orElseThrow(() ->
                    new ResourceNotFoundException("Weight", "Id", id));
    }

    @Override
    public Weight updateWeight(Weight weight, int id) {

        // check whether weight with given id exists in DB or not
        Weight existingWeight = weightRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Weight", "Id", id));

        existingWeight.setAnimalId(weight.getAnimalId());
        existingWeight.setWeight(weight.getWeight());
        existingWeight.setDate(weight.getDate());

        // save existing weight to DB
        weightRepository.save(existingWeight);
        return existingWeight;
    }

    @Override
    public void deleteWeight(int id) {

        // check whether a weight exist in a DB or not
        weightRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Weight", "Id", id));

        weightRepository.deleteById(id);
    }
}
