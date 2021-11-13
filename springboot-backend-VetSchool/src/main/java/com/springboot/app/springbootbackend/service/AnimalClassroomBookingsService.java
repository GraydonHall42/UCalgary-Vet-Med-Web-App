package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.AnimalClassroomBookings;
import com.springboot.app.springbootbackend.model.User;

import java.util.List;

public interface AnimalClassroomBookingsService {
	AnimalClassroomBookings saveBooking(AnimalClassroomBookings user);
	List<AnimalClassroomBookings> getAllBookings();
	AnimalClassroomBookings getBookingById(int id);
	AnimalClassroomBookings updateBooking(AnimalClassroomBookings user, int id);
	void deleteBooking(int id);
}
