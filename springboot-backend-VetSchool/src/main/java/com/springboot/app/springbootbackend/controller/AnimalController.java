package com.springboot.app.springbootbackend.controller;


import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import com.springboot.app.springbootbackend.model.Animal;
import com.springboot.app.springbootbackend.service.AnimalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
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
    public MappingJacksonValue getAllAnimals(@RequestParam(required = false) String fields){
        SimpleBeanPropertyFilter simpleBeanPropertyFilter;
        if(fields.length() == 0){
            simpleBeanPropertyFilter = SimpleBeanPropertyFilter.serializeAll();
        }
        else {
            simpleBeanPropertyFilter = SimpleBeanPropertyFilter.serializeAllExcept(fields.split(","));
        }

        FilterProvider filterProvider = new SimpleFilterProvider().addFilter("Filter", simpleBeanPropertyFilter);
        List<Animal> selected = animalService.getAllAnimals();
        MappingJacksonValue mappingJacksonValue = new MappingJacksonValue(selected);
        mappingJacksonValue.setFilters(filterProvider);

        return mappingJacksonValue;

    }

    // build get animal by id, eight only REST API
    // http://localhost:8080/animals/1/weights
    @GetMapping("{id}")
    public MappingJacksonValue getAnimalById(
            @PathVariable("id") int id,
            @RequestParam(required = false) String fields
    ) {
        SimpleBeanPropertyFilter simpleBeanPropertyFilter;
        if(fields.length() == 0){
            simpleBeanPropertyFilter = SimpleBeanPropertyFilter.serializeAll();
        }
        else {
            simpleBeanPropertyFilter = SimpleBeanPropertyFilter.serializeAllExcept(fields.split(","));
        }

        FilterProvider filterProvider = new SimpleFilterProvider().addFilter("Filter", simpleBeanPropertyFilter);
        Animal selected = animalService.getAnimalById(id);
        MappingJacksonValue mappingJacksonValue = new MappingJacksonValue(selected);
        mappingJacksonValue.setFilters(filterProvider);

        return mappingJacksonValue;
    }

    // build get animal by type REST API
    // http://localhost:8080/api/animals/dog
    @GetMapping("/byType/{type}")
    public List<Animal> getAnimalByType(@PathVariable("type") String type){
        return animalService.getAnimalByType(type);
    }

    // build get animal by type REST API
    // http://localhost:8080/api/animals/dog
    @GetMapping("/byName/{name}")
    public List<Animal> getAnimalByName(@PathVariable("name") String name){
        return animalService.getAnimalByName(name);
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