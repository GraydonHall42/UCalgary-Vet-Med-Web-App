package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Role findByName(String name);
}
