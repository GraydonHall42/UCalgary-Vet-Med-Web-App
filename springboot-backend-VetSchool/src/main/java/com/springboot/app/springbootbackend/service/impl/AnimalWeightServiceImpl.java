package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.Animal;
import com.springboot.app.springbootbackend.model.AnimalWeight;
import com.springboot.app.springbootbackend.repository.AnimalRepository;
import com.springboot.app.springbootbackend.repository.AnimalWeightRepository;
import com.springboot.app.springbootbackend.service.AnimalService;
import com.springboot.app.springbootbackend.service.AnimalWeightService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalWeightServiceImpl implements AnimalWeightService {

	private AnimalWeightRepository animalWeightRepository;

	public AnimalWeightServiceImpl(AnimalWeightRepository animalWeightRepository) {
		super();
		this.animalWeightRepository = animalWeightRepository;
	}

//	@Override
//	public Animal saveAnimal(Animal animal) {
//		return animalWeightRepository.save(animal);
//	}
//
	@Override
	public List<AnimalWeight> getAllAnimalWeights() {
		return animalWeightRepository.findAll();
	}
//
//	@Override
//	public Animal getAnimalById(int id) {
//		return animalWeightRepository.findById(id).orElseThrow(() ->
//						new ResourceNotFoundException("Employee", "Id", id));
//
//	}

//	@Override
//	public List<Animal> getAnimalByType(String type) {
//		return animalWeightRepository.findByAnimalType(type);
//	}

//	@Override
//	public Animal updateAnimal(Animal animal, int id) {
//
//		// we need to check whether employee with given id is exist in DB or not
//		Animal existingAnimal = animalWeightRepository.findById(id).orElseThrow(
//				() -> new ResourceNotFoundException("Animal", "Id", id));
//
//		existingAnimal.setAnimalName(animal.getAnimalName());
//		existingAnimal.setAnimalType(animal.getAnimalType());
//		// save existing employee to DB
//		animalWeightRepository.save(existingAnimal);
//		return existingAnimal;
//	}
//
//	@Override
//	public void deleteAnimal(int id) {
//
//		// check whether a employee exist in a DB or not
//		animalWeightRepository.findById(id).orElseThrow(() ->
//								new ResourceNotFoundException("Employee", "Id", id));
//		animalWeightRepository.deleteById(id);
//	}



}
