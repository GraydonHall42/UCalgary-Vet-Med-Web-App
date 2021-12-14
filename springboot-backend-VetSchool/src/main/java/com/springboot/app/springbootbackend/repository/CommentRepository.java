package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    Optional<List<Comment>> findCommentsByMedicalIssueId(int id);

}
