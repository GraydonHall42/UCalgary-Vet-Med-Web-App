package com.springboot.app.springbootbackend.service.impl;

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
}
