package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.AnimalClassroomBooking;
import com.springboot.app.springbootbackend.service.AnimalClassroomBookingsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class AnimalClassroomBookingsController {

	private AnimalClassroomBookingsService bookingService;

	public AnimalClassroomBookingsController(AnimalClassroomBookingsService bookingService) {
		super();
		this.bookingService = bookingService;
	}
	
	// build create employee REST API
	@PostMapping()
	public ResponseEntity<AnimalClassroomBooking> saveBooking(@RequestBody AnimalClassroomBooking booking){
		return new ResponseEntity<AnimalClassroomBooking>(bookingService.saveBooking(booking), HttpStatus.CREATED);
	}
	
	// build get all animals REST API
	// http://localhost:8080/api/bookings
	@GetMapping
	public List<AnimalClassroomBooking> getAllBookings(){
		return bookingService.getAllBookings();
	}
	
	// build get animals by id REST API
	// http://localhost:8080/api/bookings/1
	@GetMapping("{id}")
	public ResponseEntity<AnimalClassroomBooking> getBookingByID(@PathVariable("id") int bookingID){
		return new ResponseEntity<AnimalClassroomBooking>(bookingService.getBookingById(bookingID), HttpStatus.OK);
	}


	// build update employee REST API
	// http://localhost:8080/api/bookings/1
	@PutMapping("{id}")
	public ResponseEntity<AnimalClassroomBooking> updateBooking(@PathVariable("id") int id
												  , @RequestBody AnimalClassroomBooking booking){
		return new ResponseEntity<AnimalClassroomBooking>(bookingService.updateBooking(booking, id), HttpStatus.OK);
	}

	// build delete employee REST API
	// http://localhost:8080/api/bookings/1
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteBooking(@PathVariable("id") int id){

		// delete employee from DB
		bookingService.deleteBooking(id);

		return new ResponseEntity<String>("User deleted successfully!.", HttpStatus.OK);
	}


}
