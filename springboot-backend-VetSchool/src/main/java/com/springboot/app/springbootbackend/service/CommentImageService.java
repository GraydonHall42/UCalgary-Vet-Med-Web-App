package com.springboot.app.springbootbackend.service;

import com.springboot.app.springbootbackend.model.CommentImage;

import java.util.List;

public interface CommentImageService {

    CommentImage saveCommentImage(CommentImage commentImage);
    List<CommentImage> getAllCommentImages();
    CommentImage getCommentImageById(int id);
    CommentImage updateCommentImage(CommentImage weight, int id);
    void deleteCommentImage(int id);
}
