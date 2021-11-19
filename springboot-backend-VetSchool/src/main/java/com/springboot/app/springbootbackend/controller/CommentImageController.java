package com.springboot.app.springbootbackend.controller;

import com.springboot.app.springbootbackend.model.CommentImage;
import com.springboot.app.springbootbackend.service.CommentImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/treatment-images")
public class CommentImageController {

    private CommentImageService commentImageService;

    public CommentImageController(CommentImageService commentImageService) {
        super();
        this.commentImageService = commentImageService;
    }

    // CREATE new treatment image
    @PostMapping()
    public ResponseEntity<CommentImage> saveTreatment(@RequestBody CommentImage commentImage){
        return new ResponseEntity<CommentImage>(
                commentImageService.saveCommentImage(commentImage),
                HttpStatus.CREATED);
    }

    //READ all treatment images
    @GetMapping
    public List<CommentImage> getAllTreatmentImages(){
        return commentImageService.getAllCommentImages();
    }

    // build get treatmentImage by id REST API
    // http://localhost:8080/api/treatment-images/1
    @GetMapping("{id}")
    public ResponseEntity<CommentImage> getTreatmentImageByID(@PathVariable("id") int treatmentImageID) {
        return new ResponseEntity<CommentImage>(
                        commentImageService.getCommentImageById(treatmentImageID), HttpStatus.OK);
    }


    // build update treatmentImage REST API
    // http://localhost:8080/api/treatment-images/1
    @PutMapping("{id}")
    public ResponseEntity<CommentImage> updateTreatmentImage(@PathVariable("id") int id
            , @RequestBody CommentImage commentImage){
        return new ResponseEntity<CommentImage>(
                        commentImageService.updateCommentImage(commentImage, id), HttpStatus.OK);
    }

    // build delete treatmentImage REST API
    // http://localhost:8080/api/treatment-images/1
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTreatmentImage(@PathVariable("id") int id) {

        commentImageService.deleteCommentImage(id);

        return new ResponseEntity<String>("Weight deleted successfully!", HttpStatus.OK);
    }

}
