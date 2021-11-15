package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.AnimalClassroomBooking;
import com.springboot.app.springbootbackend.repository.AnimalClassroomBookingsRepository;
import com.springboot.app.springbootbackend.service.AnimalClassroomBookingsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalClassroomBookingsServiceImpl implements AnimalClassroomBookingsService {

	private AnimalClassroomBookingsRepository bookingRepository;

	public AnimalClassroomBookingsServiceImpl(AnimalClassroomBookingsRepository bookingsRepository) {
		super();
		this.bookingRepository = bookingsRepository;
	}

	public AnimalClassroomBooking saveBooking(AnimalClassroomBooking booking) {
		return bookingRepository.save(booking);
	}

	@Override
	public List<AnimalClassroomBooking> getAllBookings() {
		return bookingRepository.findAll();
	}

	@Override
	public AnimalClassroomBooking getBookingById(int id) {
		return bookingRepository.findById(id).orElseThrow(() ->
						new ResourceNotFoundException("Employee", "Id", id));

	}


	@Override
	public AnimalClassroomBooking updateBooking(AnimalClassroomBooking booking, int id) {

		// we need to check whether employee with given id is exist in DB or not
		AnimalClassroomBooking existingBooking = bookingRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Animal", "Id", id));

		existingBooking.setBookingID(booking.getBookingID());
		existingBooking.setAnimalID(booking.getAnimalID());
		existingBooking.setTeacherID(booking.getTeacherID());
		existingBooking.setApproveeID(booking.getApproveeID());
		existingBooking.setBookingDate(booking.getBookingDate());
		existingBooking.setStartTime(booking.getStartTime());
		existingBooking.setReturnTime(booking.getReturnTime());
		existingBooking.setApprovalStatus(booking.getApprovalStatus());

		bookingRepository.save(existingBooking);
		return existingBooking;
	}

	@Override
	public void deleteBooking(int id) {

		// check whether a employee exist in a DB or not
		bookingRepository.findById(id).orElseThrow(() ->
								new ResourceNotFoundException("Employee", "Id", id));
		bookingRepository.deleteById(id);
	}



}
