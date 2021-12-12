package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="comment_images")
public class CommentImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comment_photo_id", nullable = false)
    private Integer commentPhotoId;

    @Column(name="comment_id", nullable = false)
    private Integer commentId;

    @Column(name = "image")
    private String image;

}
