package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.Animal;

import java.util.List;

public interface AnimalService {
	Animal saveAnimal(Animal employee);
	List<Animal> getAllAnimals();
	Animal getAnimalById(int id);
	Animal updateAnimal(Animal employee, int id);
	void deleteAnimal(int id);
	List<Animal> getAnimalByType(String type);
	List<Animal> getAnimalByName(String name);
}
