package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.Animal;
import com.springboot.app.springbootbackend.model.Role;
import com.springboot.app.springbootbackend.model.User;
import com.springboot.app.springbootbackend.repository.AnimalRepository;
import com.springboot.app.springbootbackend.repository.RoleRepository;
import com.springboot.app.springbootbackend.repository.UserRepository;
import com.springboot.app.springbootbackend.service.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService, UserDetailsService {

	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	private final PasswordEncoder passwordEncoder;

	// AUTHENTICATION
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepository.findByEmail(email);
		if(user == null) throw new UsernameNotFoundException("User not found.");
		Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
		user.getRoles().forEach(role -> {
			authorities.add(new SimpleGrantedAuthority(role.getName()));
		});
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
	}

	@Override
	public User saveUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUserById(int id) {
		return userRepository.findById(id).orElseThrow(() ->
						new ResourceNotFoundException("Employee", "Id", id));

	}

	@Override
	public Role saveRole(Role role) {
		return roleRepository.save(role);
	}

	@Override
	public void addRoleToUser(String email, String roleName) {
		User user = userRepository.findByEmail(email);
		Role role = roleRepository.findByName(roleName);
		user.getRoles().add(role);
		userRepository.save(user);
	}

	@Override
	public List<User> getUserByType(String type) {
		return userRepository.findByUserType(type);
	}

	@Override
	public User getUserByEmail(String email) {

		System.out.println("IN SERVICE IMP");
		return userRepository.findByEmail(email);
	}

	@Override
	public User updateUser(User user, int id) {

		// we need to check whether employee with given id is exist in DB or not
		User existingUser = userRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("User", "Id", id));

		existingUser.setName(user.getName());
		existingUser.setUserType(user.getUserType());
		existingUser.setPassword(user.getPassword());
		existingUser.setEmail(user.getEmail());
		// save existing employee to DB
		userRepository.save(existingUser);
		return existingUser;
	}

	@Override
	public void deleteUser(int id) {

		// check whether a employee exist in a DB or not
		userRepository.findById(id).orElseThrow(() ->
								new ResourceNotFoundException("User", "Id", id));
		userRepository.deleteById(id);
	}



}
