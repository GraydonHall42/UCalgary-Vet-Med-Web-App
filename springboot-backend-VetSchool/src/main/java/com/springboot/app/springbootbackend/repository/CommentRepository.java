package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
