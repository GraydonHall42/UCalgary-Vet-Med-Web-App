package com.springboot.app.springbootbackend.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.app.springbootbackend.model.Role;
import com.springboot.app.springbootbackend.model.User;
import com.springboot.app.springbootbackend.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService userService;

	// build create employee REST API
	@PostMapping("/user/save")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
	}

	@PostMapping("/role/save")
	public ResponseEntity<Role> saveRole(@RequestBody Role role) {
		return new ResponseEntity<Role>(userService.saveRole(role), HttpStatus.CREATED);
	}

	@PostMapping("/user/addRole")
	public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
		userService.addRoleToUser(form.getEmail(), form.getRoleName());
		return ResponseEntity.ok().build();
	}

	// build get all animals REST API
	// http://localhost:8080/api/users
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	// build get animals by id REST API
	// http://localhost:8080/api/users/1
	@GetMapping("/user/id/{id}")
	public ResponseEntity<User> getUserByID(@PathVariable("id") int userID) {
		return new ResponseEntity<User>(userService.getUserById(userID), HttpStatus.OK);
	}

	@GetMapping("/user/email/{email}")
	public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
		User user = userService.getUserByEmail(email);
		user.setPassword("");
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	// build update employee REST API
	// http://localhost:8080/api/users/1
	@PutMapping("/user/update/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") int id, @RequestBody User updatedUser) {
		return new ResponseEntity<User>(userService.updateUser(updatedUser, id), HttpStatus.OK);
	}

	// build delete employee REST API
	// http://localhost:8080/api/users/1
	@DeleteMapping("/user/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") int id) {

		// delete employee from DB
		userService.deleteUser(id);

		return new ResponseEntity<String>("User deleted successfully!.", HttpStatus.OK);
	}

	@GetMapping("/token/refresh")
	public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String authorizationHeader = request.getHeader(AUTHORIZATION);
		if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
			try {
				String refresh_token = authorizationHeader.substring("Bearer ".length());
				Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
				JWTVerifier verifier = JWT.require(algorithm).build();
				DecodedJWT decodedJWT = verifier.verify(refresh_token);
				String email = decodedJWT.getSubject();
				System.out.println(email);
				User user = userService.getUserByEmail(email);
				System.out.println(user);
				String access_token = JWT.create()
						.withSubject(user.getEmail())
						.withExpiresAt(new Date(System.currentTimeMillis() + (30 * 60 * 1000)))
						.withIssuer(request.getRequestURL().toString())
						.withClaim("roles", user.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
						.sign(algorithm);
				Map<String, String> tokens = new HashMap<>();
				tokens.put("access_token", access_token);
				tokens.put("refresh_token", refresh_token);
				response.setContentType(APPLICATION_JSON_VALUE);
				new ObjectMapper().writeValue(response.getOutputStream(), tokens);

			} catch (Exception exception) {
				response.setHeader("error", exception.getMessage());
				response.setStatus(FORBIDDEN.value());
				Map<String, String> error = new HashMap<>();
				error.put("error_message", exception.getMessage());
				response.setContentType(APPLICATION_JSON_VALUE);
				new ObjectMapper().writeValue(response.getOutputStream(), error);
			}
		} else {
			throw new RuntimeException("Refresh Token is missing");
		}

	}
}

@Data
class RoleToUserForm {
	private String email;
	private String roleName;
}