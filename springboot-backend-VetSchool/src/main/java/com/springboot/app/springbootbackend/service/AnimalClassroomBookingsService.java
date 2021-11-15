package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.AnimalClassroomBooking;

import java.util.List;

public interface AnimalClassroomBookingsService {
	AnimalClassroomBooking saveBooking(AnimalClassroomBooking user);
	List<AnimalClassroomBooking> getAllBookings();
	AnimalClassroomBooking getBookingById(int id);
	AnimalClassroomBooking updateBooking(AnimalClassroomBooking user, int id);
	void deleteBooking(int id);
}
