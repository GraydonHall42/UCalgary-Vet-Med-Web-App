package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.ClassroomBooking;

import java.util.List;

public interface ClassroomBookingsService {
	ClassroomBooking saveBooking(ClassroomBooking user);
	List<ClassroomBooking> getAllBookings();
	ClassroomBooking getBookingById(int id);
	ClassroomBooking updateBooking(ClassroomBooking user, int id);
	void deleteBooking(int id);
}
