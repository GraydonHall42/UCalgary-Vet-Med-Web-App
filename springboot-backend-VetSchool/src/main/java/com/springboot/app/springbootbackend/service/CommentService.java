package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.Comment;

import java.util.List;

public interface CommentService {

    Comment saveComment(Comment comment);
    List<Comment> getAllComments();

}
