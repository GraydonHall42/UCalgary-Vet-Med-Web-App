package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.Animal;
import com.springboot.app.springbootbackend.service.AnimalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animals")
public class AnimalController {
	
	private AnimalService employeeService;

	public AnimalController(AnimalService employeeService) {
		super();
		this.employeeService = employeeService;
	}
	
	// build create employee REST API
	@PostMapping()
	public ResponseEntity<Animal> saveEmployee(@RequestBody Animal animal){
		return new ResponseEntity<Animal>(employeeService.saveAnimal(animal), HttpStatus.CREATED);
	}
	
	// build get all employees REST API
	// http://localhost:8080/api/animals
	@GetMapping
	public List<Animal> getAllAnimals(){
		return employeeService.getAllAnimals();
	}
	
	// build get employee by id REST API
	// http://localhost:8080/api/animals/1
	@GetMapping("{id}")
	public ResponseEntity<Animal> getEmployeeById(@PathVariable("id") int animalID){
		return new ResponseEntity<Animal>(employeeService.getAnimalById(animalID), HttpStatus.OK);
	}


	// build update employee REST API
	// http://localhost:8080/api/animals/1
	@PutMapping("{id}")
	public ResponseEntity<Animal> updateEmployee(@PathVariable("id") int id
												  , @RequestBody Animal animal){
		return new ResponseEntity<Animal>(employeeService.updateAnimal(animal, id), HttpStatus.OK);
	}

	// build delete employee REST API
	// http://localhost:8080/api/employees/1
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") int id){

		// delete employee from DB
		employeeService.deleteAnimal(id);

		return new ResponseEntity<String>("Animal deleted successfully!.", HttpStatus.OK);
	}
	
}
