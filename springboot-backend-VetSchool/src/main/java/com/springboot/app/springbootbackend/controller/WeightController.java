package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.service.WeightService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/weight")
public class WeightController {

    private WeightService weightService;

    public WeightController(WeightService weightService) {
        super();
        this.weightService = weightService;
    }
}
