package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.ClassroomBooking;
import com.springboot.app.springbootbackend.service.ClassroomBookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class ClassroomBookingController {

	private ClassroomBookingService bookingService;

	public ClassroomBookingController(ClassroomBookingService bookingService) {
		super();
		this.bookingService = bookingService;
	}
	
	// build create employee REST API
	@PostMapping()
	public ResponseEntity<ClassroomBooking> saveBooking(@RequestBody ClassroomBooking booking){
		return new ResponseEntity<ClassroomBooking>(bookingService.saveBooking(booking), HttpStatus.CREATED);
	}
	
	// build get all animals REST API
	// http://localhost:8080/api/bookings
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	public List<ClassroomBooking> getAllBookings(){
		return bookingService.getAllBookings();
	}
	
	// build get animals by id REST API
	// http://localhost:8080/api/bookings/1
	@GetMapping("{id}")
	public ResponseEntity<ClassroomBooking> getBookingByID(@PathVariable("id") int bookingID){
		return new ResponseEntity<ClassroomBooking>(bookingService.getBookingById(bookingID), HttpStatus.OK);
	}


	// build update employee REST API
	// http://localhost:8080/api/bookings/1
	@PutMapping("{id}")
	public ResponseEntity<ClassroomBooking> updateBooking(@PathVariable("id") int id
												  , @RequestBody ClassroomBooking booking){
		return new ResponseEntity<ClassroomBooking>(bookingService.updateBooking(booking, id), HttpStatus.OK);
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
