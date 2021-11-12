package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userID;
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "email", nullable = false)
	private String email;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "userType", nullable = false)
	private String userType;

}
