package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.Comment;
import com.springboot.app.springbootbackend.model.User;

import java.util.List;

public interface CommentService {

    Comment saveComment(Comment comment);
    List<Comment> getAllComments();
    Comment updateComment(Comment comment, int id);
    void deleteComment(int id);

}
