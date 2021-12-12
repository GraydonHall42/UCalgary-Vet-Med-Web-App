package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.User;
import com.springboot.app.springbootbackend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	// build create employee REST API
	@PostMapping()
	public ResponseEntity<User> saveUser(@RequestBody User user){
		return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
	}
	
	// build get all animals REST API
	// http://localhost:8080/api/users
	@GetMapping
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	// build get animals by id REST API
	// http://localhost:8080/api/users/1
	@GetMapping("{id}")
	public ResponseEntity<User> getUserByID(@PathVariable("id") int userID){
		return new ResponseEntity<User>(userService.getUserById(userID), HttpStatus.OK);
	}

	// build get animal by type REST API
	// http://localhost:8080/api/users/dog
	@GetMapping("/byType/{type}")
	public List<User> getUserByType(@PathVariable("type") String type){
		return userService.getUserByType(type);
	}



	// build update employee REST API
	// http://localhost:8080/api/users/1
	@PutMapping("{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") int id
												  , @RequestBody User user){
		return new ResponseEntity<User>(userService.updateUser(user, id), HttpStatus.OK);
	}

	// build delete employee REST API
	// http://localhost:8080/api/users/1
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") int id){

		// delete employee from DB
		userService.deleteUser(id);

		return new ResponseEntity<String>("User deleted successfully!.", HttpStatus.OK);
	}


}
