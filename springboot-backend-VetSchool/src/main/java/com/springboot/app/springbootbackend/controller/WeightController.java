package com.springboot.app.springbootbackend.controller;

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

    // build get weight by id REST API
    // http://localhost:8080/api/weight/1
    @GetMapping("{id}")
    public ResponseEntity<Weight> getWeightByID(@PathVariable("id") int weightID) {
        return new ResponseEntity<Weight>(weightService.getWeightById(weightID), HttpStatus.OK);
    }

    // build update weight REST API
    // http://localhost:8080/api/weight/1
    @PutMapping("{id}")
    public ResponseEntity<Weight> updateWeight(@PathVariable("id") int id
                                                    , @RequestBody Weight weight){
        return new ResponseEntity<Weight>(weightService.updateWeight(weight, id), HttpStatus.OK);
    }

    // build delete weight REST API
    // http://localhost:8080/api/weight/1
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteWeight(@PathVariable("id") int id) {

        weightService.deleteWeight(id);

        return new ResponseEntity<String>("Weight deleted successfully!", HttpStatus.OK);
    }

}
