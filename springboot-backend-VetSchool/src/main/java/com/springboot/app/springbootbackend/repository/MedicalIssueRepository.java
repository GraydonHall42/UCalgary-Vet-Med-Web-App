package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Animal;
import com.springboot.app.springbootbackend.model.MedicalIssue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicalIssueRepository extends JpaRepository<MedicalIssue, Integer> {
    List<MedicalIssue> findByCloseDateIsNull();
}
