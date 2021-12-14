package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.Comment;
import com.springboot.app.springbootbackend.model.MedicalIssue;
import com.springboot.app.springbootbackend.model.ProfileImage;
import com.springboot.app.springbootbackend.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private CommentService commentService;

    public CommentController(CommentService commentService) {
        super();
        this.commentService = commentService;
    }

    // CREATE new treatment
    @PostMapping()
    public ResponseEntity<Comment> saveComment(@RequestBody Comment comment){
        return new ResponseEntity<Comment>(
                commentService.saveComment(comment),
                HttpStatus.CREATED);
    }

    //READ all comment
    @GetMapping
    public List<Comment> getAllComments(){
        return commentService.getAllComments();
    }


    @PutMapping("{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable("id") int id
            , @RequestBody Comment comment){
        return new ResponseEntity<Comment>(commentService.updateComment(comment, id), HttpStatus.OK);
    }


    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteComment(@PathVariable("id") int id){

        commentService.deleteComment(id);

        return new ResponseEntity<String>("Comment deleted successfully!.", HttpStatus.OK);
    }

    // build get comments by medical issue id REST API
    // http://localhost:8080/api/comments/medicalIssue/1
    @GetMapping("/medicalIssue/{id}")
    public List<Comment> findCommentsByMedicalIssueId(@PathVariable("id") int id) {
        return commentService.findCommentsByMedicalIssueId(id);
    }
}
