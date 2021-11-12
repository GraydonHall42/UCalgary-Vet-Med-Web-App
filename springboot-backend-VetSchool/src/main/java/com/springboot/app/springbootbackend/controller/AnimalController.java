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

    private AnimalService animalService;

    public AnimalController(AnimalService employeeService) {
        super();
        this.animalService = employeeService;
    }

    // build create employee REST API
    @PostMapping()
    public ResponseEntity<Animal> saveAnimal(@RequestBody Animal animal){
        return new ResponseEntity<Animal>(animalService.saveAnimal(animal), HttpStatus.CREATED);
    }

    // build get all animals REST API
    // http://localhost:8080/api/animals
    @GetMapping
    public List<Animal> getAllAnimals(){
        return animalService.getAllAnimals();
    }

    // build get animals by id REST API
    // http://localhost:8080/api/animals/1
    @GetMapping("{id}")
    public ResponseEntity<Animal> getAnimalByID(@PathVariable("id") int animalID){
        return new ResponseEntity<Animal>(animalService.getAnimalById(animalID), HttpStatus.OK);
    }

    // build get animal by type REST API
    // http://localhost:8080/api/animals/dog
    @GetMapping("/byType/{type}")
    public List<Animal> getAnimalByType(@PathVariable("type") String type){
        return animalService.getAnimalByType(type);
    }



    // build update employee REST API
    // http://localhost:8080/api/animals/1
    @PutMapping("{id}")
    public ResponseEntity<Animal> updateAnimal(@PathVariable("id") int id
            , @RequestBody Animal animal){
        return new ResponseEntity<Animal>(animalService.updateAnimal(animal, id), HttpStatus.OK);
    }

    // build delete employee REST API
    // http://localhost:8080/api/employees/1
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteAnimal(@PathVariable("id") int id){

        // delete employee from DB
        animalService.deleteAnimal(id);

        return new ResponseEntity<String>("Animal deleted successfully!.", HttpStatus.OK);
    }


}