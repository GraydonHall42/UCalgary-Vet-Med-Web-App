package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="animal")
public class Animal {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)  for now we set this manually
	private Integer AnimalID;
	
	@Column(name = "Name", nullable = false)
	private String Name;
	
	@Column(name = "Type")
	private String Type;

}
