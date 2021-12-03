package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.ClassroomBooking;
import com.springboot.app.springbootbackend.repository.ClassroomBookingRepository;
import com.springboot.app.springbootbackend.service.ClassroomBookingService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassroomBookingServiceImpl implements ClassroomBookingService {

	private ClassroomBookingRepository bookingRepository;

	public ClassroomBookingServiceImpl(ClassroomBookingRepository bookingsRepository) {
		super();
		this.bookingRepository = bookingsRepository;
	}

	public ClassroomBooking saveBooking(ClassroomBooking booking) {
		return bookingRepository.save(booking);
	}

	@Override
	public List<ClassroomBooking> getAllBookings() {
		return bookingRepository.findAll();
	}

	@Override
	public ClassroomBooking getBookingById(int id) {
		return bookingRepository.findById(id).orElseThrow(() ->
						new ResourceNotFoundException("Employee", "Id", id));

	}


	@Override
	public ClassroomBooking updateBooking(ClassroomBooking booking, int id) {

		// we need to check whether employee with given id is exist in DB or not
		ClassroomBooking existingBooking = bookingRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Animal", "Id", id));

		existingBooking.setBookingId(booking.getBookingId());
		existingBooking.setAnimalId(booking.getAnimalId());
		existingBooking.setTeacherId(booking.getTeacherId());
		existingBooking.setAdminAppId(booking.getAdminAppId());
		existingBooking.setTechAppId(booking.getTechAppId());
		existingBooking.setBookingDate(booking.getBookingDate());
		existingBooking.setStartTime(booking.getStartTime());
		existingBooking.setReturnTime(booking.getReturnTime());
		existingBooking.setAdminAppStatus(booking.getAdminAppStatus());
		existingBooking.setTechAppStatus(booking.getTechAppStatus());

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
