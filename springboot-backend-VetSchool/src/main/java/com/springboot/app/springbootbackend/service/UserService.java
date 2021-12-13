package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.Animal;
import com.springboot.app.springbootbackend.model.Role;
import com.springboot.app.springbootbackend.model.User;

import java.util.List;

public interface UserService {
	User saveUser(User user);
	List<User> getAllUsers();
	User getUserById(int id);
	User updateUser(User user, int id);
	void deleteUser(int id);
	Role saveRole(Role role);
	void addRoleToUser(String email, String roleName);
	User getUserByEmail(String email);
}
