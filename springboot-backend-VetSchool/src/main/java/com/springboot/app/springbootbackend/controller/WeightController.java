package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.TreatmentImage;
import com.springboot.app.springbootbackend.model.Weight;
import com.springboot.app.springbootbackend.service.WeightService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weight")
public class WeightController {

    private WeightService weightService;

    public WeightController(WeightService weightService) {
        super();
        this.weightService = weightService;
    }

    // CREATE new weight
    @PostMapping()
    public ResponseEntity<Weight> saveTreatment(@RequestBody Weight weight){
        return new ResponseEntity<Weight>(
                weightService.saveWeight(weight),
                HttpStatus.CREATED);
    }

    //READ all weights
    @GetMapping
    public List<Weight> getAllWeights(){
        return weightService.getAllWeights();
    }
}
