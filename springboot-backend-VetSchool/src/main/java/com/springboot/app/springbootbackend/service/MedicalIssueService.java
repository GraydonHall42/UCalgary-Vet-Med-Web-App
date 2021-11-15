package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.MedicalIssue;

public interface MedicalIssueService {

    MedicalIssue saveMedicalIssue(MedicalIssue issue);

    MedicalIssue getIssueById(Integer id);

}
