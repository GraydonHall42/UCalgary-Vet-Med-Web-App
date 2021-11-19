package com.springboot.app.springbootbackend.repository;

import com.springboot.app.springbootbackend.model.CommentImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentImageRepository extends JpaRepository<CommentImage, Integer> {
}
