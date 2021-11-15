package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.MedicalIssue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalIssueRepository extends JpaRepository<MedicalIssue, Integer> {
}
