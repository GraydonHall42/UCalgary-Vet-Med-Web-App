package com.springboot.app.springbootbackend;

import com.springboot.app.springbootbackend.model.Role;
import com.springboot.app.springbootbackend.model.User;
import com.springboot.app.springbootbackend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class SpringbootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

//	@Bean
//	CommandLineRunner run(UserService userService) {
//		return args -> {
//
//			userService.saveUser((new User(null, "Jared", "jared@gmail.com", "password", "developer", new ArrayList<>())));
//			userService.saveUser((new User(null, "Deylin", "deylin@gmail.com", "password", "developer", new ArrayList<>())));
//			userService.saveUser((new User(null, "Graydon", "graydon@gmail.com", "password", "developer", new ArrayList<>())));
////			userService.addRoleToUser("jared@gmail.com", "ADMIN");
////			userService.addRoleToUser("deylin@gmail.com", "ADMIN");
////			userService.addRoleToUser("graydon@gmail.com", "ADMIN");
//		};
//	}

}
