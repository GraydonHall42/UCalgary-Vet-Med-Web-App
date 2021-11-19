package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.model.Comment;
import com.springboot.app.springbootbackend.repository.CommentRepository;
import com.springboot.app.springbootbackend.service.CommentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    private CommentRepository commentRepository;

    public CommentServiceImpl(CommentRepository commentRepository) {
        super();
        this.commentRepository = commentRepository;
    }

    @Override
    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }
}
