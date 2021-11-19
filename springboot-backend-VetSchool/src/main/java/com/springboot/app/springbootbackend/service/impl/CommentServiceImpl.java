package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.Comment;
import com.springboot.app.springbootbackend.model.MedicalIssue;
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

    @Override
    public Comment updateComment(Comment comment, int id) {

        Comment existingComment = commentRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Comment", "Id", id));

        existingComment.setMedicalIssueId(comment.getMedicalIssueId());
        existingComment.setTitle(comment.getTitle());
        existingComment.setDate(comment.getDate());
        existingComment.setDescription(comment.getDescription());

        // save existing employee to DB
        commentRepository.save(existingComment);
        return existingComment;
    }

    @Override
    public void deleteComment(int id) {
        commentRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Comment", "Id", id));
        commentRepository.deleteById(id);

    }
}
