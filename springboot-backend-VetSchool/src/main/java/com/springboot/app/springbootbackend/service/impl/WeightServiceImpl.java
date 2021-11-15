package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.repository.WeightRepository;
import com.springboot.app.springbootbackend.service.WeightService;
import org.springframework.stereotype.Service;

@Service
public class WeightServiceImpl implements WeightService {

    private WeightRepository weightRepository;

    public WeightServiceImpl(WeightRepository weightRepository) {
        super();
        this.weightRepository = weightRepository;
    }
}
