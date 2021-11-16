package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.Weight;

import java.util.List;

public interface WeightService {

    Weight saveWeight(Weight weight);
    List<Weight> getAllWeights();
    Weight getWeightById(int id);
    Weight updateWeight(Weight weight, int id);
    void deleteWeight(int id);
    List<Weight> getWeightByAnimalId(int id);
    List<Weight> nativeQueryTest(int id, String date);

}
