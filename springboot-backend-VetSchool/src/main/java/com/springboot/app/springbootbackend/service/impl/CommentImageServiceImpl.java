package com.springboot.app.springbootbackend.service.impl;

import com.springboot.app.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.app.springbootbackend.model.CommentImage;
import com.springboot.app.springbootbackend.repository.CommentImageRepository;
import com.springboot.app.springbootbackend.service.CommentImageService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentImageServiceImpl implements CommentImageService {

    private CommentImageRepository commentImageRepository;

    public CommentImageServiceImpl(CommentImageRepository commentImageRepository) {
        super();
        this.commentImageRepository = commentImageRepository;
    }

    @Override
    public CommentImage saveCommentImage(CommentImage commentImage) {
        return commentImageRepository.save(commentImage);
    }

    @Override
    public List<CommentImage> getAllCommentImages() {
        return commentImageRepository.findAll();
    }

    @Override
    public CommentImage getCommentImageById(int id) {
        return commentImageRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("CommentImage", "Id", id));
    }

    @Override
    public CommentImage updateCommentImage(CommentImage commentImage, int id) {
        // check whether Comment image with given id exists in DB or not
        CommentImage existingCommentImage = commentImageRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("TreatmentImage", "Id", id));

        existingCommentImage.setCommentId(commentImage.getCommentId());
        existingCommentImage.setImage(commentImage.getImage());

        // save existing treatment image to DB
        commentImageRepository.save(existingCommentImage);
        return existingCommentImage;
    }

    @Override
    public void deleteCommentImage(int id) {

        // check whether a weight exist in a DB or not
        commentImageRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("TreatmentImage", "Id", id));

        commentImageRepository.deleteById(id);
    }

}
