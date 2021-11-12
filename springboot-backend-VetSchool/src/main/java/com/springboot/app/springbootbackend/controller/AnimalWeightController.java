package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.Animal;
import com.springboot.app.springbootbackend.model.AnimalWeight;
import com.springboot.app.springbootbackend.service.AnimalService;
import com.springboot.app.springbootbackend.service.AnimalWeightService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animalWeights")
public class AnimalWeightController {

	private AnimalWeightService animalWeightService;

	public AnimalWeightController(AnimalWeightService animalWeightService) {
		super();
		this.animalWeightService = animalWeightService;
	}
	
//	// build create employee REST API
//	@PostMapping()
//	public ResponseEntity<Animal> saveAnimal(@RequestBody Animal animal){
//		return new ResponseEntity<Animal>(animalWeightService.saveAnimal(animal), HttpStatus.CREATED);
//	}
	
	// build get all animals REST API
	// http://localhost:8080/api/animalWeights
	@GetMapping
	public List<AnimalWeight> getAllAnimals(){
		return animalWeightService.getAllAnimalWeights();
	}
	
//	// build get animals by id REST API
//	// http://localhost:8080/api/animals/1
//	@GetMapping("{id}")
//	public ResponseEntity<Animal> getAnimalByID(@PathVariable("id") int animalID){
//		return new ResponseEntity<Animal>(animalWeightService.getAnimalById(animalID), HttpStatus.OK);
//	}
//
//	// build get animal by type REST API
//	// http://localhost:8080/api/animals/dog
//	@GetMapping("/byType/{type}")
//	public List<Animal> getAnimalByType(@PathVariable("type") String type){
//		return animalWeightService.getAnimalByType(type);
//	}
//
//
//
//	// build update employee REST API
//	// http://localhost:8080/api/animals/1
//	@PutMapping("{id}")
//	public ResponseEntity<Animal> updateAnimal(@PathVariable("id") int id
//												  , @RequestBody Animal animal){
//		return new ResponseEntity<Animal>(animalWeightService.updateAnimal(animal, id), HttpStatus.OK);
//	}
//
//	// build delete employee REST API
//	// http://localhost:8080/api/employees/1
//	@DeleteMapping("{id}")
//	public ResponseEntity<String> deleteAnimal(@PathVariable("id") int id){
//
//		// delete employee from DB
//		animalWeightService.deleteAnimal(id);
//
//		return new ResponseEntity<String>("Animal deleted successfully!.", HttpStatus.OK);
//	}


}
