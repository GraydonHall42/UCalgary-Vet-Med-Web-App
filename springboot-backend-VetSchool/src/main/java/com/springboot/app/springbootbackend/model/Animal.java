package com.springboot.app.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonFilter;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@JsonFilter("Filter")
@Table(name="animal")
public class Animal {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="animal_id")
	private Integer animalId;
	
	@Column(name = "animal_name", nullable = false)
	private String animalName;
	
	@Column(name = "animal_type", nullable = false)
	private String animalType;

	@OneToMany(mappedBy = "animalId")  // this is the name in the corresponding table
	List<Weight> weights;

	@OneToMany(mappedBy = "animalId")
	List<ProfileImage> images;

	@OneToMany(mappedBy = "animalId")
	List<MedicalIssue> medicalIssues;

}
