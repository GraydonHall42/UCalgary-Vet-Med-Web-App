package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.Animal;
import com.springboot.app.springbootbackend.repository.AnimalRepository;
import com.springboot.app.springbootbackend.service.AnimalService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalServiceImpl implements AnimalService {

	private AnimalRepository animalRepository;
	
	public AnimalServiceImpl(AnimalRepository employeeRepository) {
		super();
		this.animalRepository = employeeRepository;
	}

	@Override
	public Animal saveAnimal(Animal animal) {
		return animalRepository.save(animal);
	}

	@Override
	public List<Animal> getAllAnimals() {
		return animalRepository.findAll();
	}

	@Override
	public Animal getAnimalById(int id) {
		return animalRepository.findById(id).orElseThrow(() ->
						new ResourceNotFoundException("Employee", "Id", id));

	}

	@Override
	public List<Animal> getAnimalByType(String type) {
		return animalRepository.findByAnimalTypeContaining(type);
	}

	@Override
	public List<Animal> getAnimalByName(String name) {
		return animalRepository.findByAnimalNameContaining(name);
	}

	@Override
	public Animal updateAnimal(Animal animal, int id) {

		// we need to check whether employee with given id is exist in DB or not
		Animal existingAnimal = animalRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Animal", "Id", id));

		existingAnimal.setAnimalName(animal.getAnimalName());
		existingAnimal.setAnimalType(animal.getAnimalType());
		existingAnimal.setSex(animal.getSex());
		existingAnimal.setProfilePhoto(animal.getProfilePhoto());
		existingAnimal.setBirthDate(animal.getBirthDate());
		existingAnimal.setColor(animal.getColor());
		existingAnimal.setActive(animal.getActive());
		existingAnimal.setMicrochipNum(animal.getMicrochipNum());
		existingAnimal.setBreed(animal.getBreed());
		existingAnimal.setLastCheckup(animal.getLastCheckup());
		existingAnimal.setStatus(animal.getStatus());
		existingAnimal.setLocation(animal.getLocation());
		// save existing employee to DB
		animalRepository.save(existingAnimal);
		return existingAnimal;
	}

	@Override
	public void deleteAnimal(int id) {

		// check whether a employee exist in a DB or not
		animalRepository.findById(id).orElseThrow(() ->
								new ResourceNotFoundException("Employee", "Id", id));
		animalRepository.deleteById(id);
	}



}
