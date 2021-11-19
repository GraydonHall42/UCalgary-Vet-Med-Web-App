package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.Comment;
import com.springboot.app.springbootbackend.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/treatments")
public class CommentController {

    private CommentService commentService;

    public CommentController(CommentService commentService) {
        super();
        this.commentService = commentService;
    }

    // CREATE new treatment
    @PostMapping()
    public ResponseEntity<Comment> saveTreatment(@RequestBody Comment comment){
        return new ResponseEntity<Comment>(
                commentService.saveComment(comment),
                HttpStatus.CREATED);
    }

    //READ all treatment
    @GetMapping
    public List<Comment> getAllTreatments(){
        return commentService.getAllComments();
    }
}
