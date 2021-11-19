package com.springboot.app.springbootbackend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comment_id", nullable = false)
    private Integer commentId;

    @Column(name="medical_issue_id", nullable = false)
    private Integer medicalIssueId;

    @Column(name = "title")
    private String title;

    @Column(name = "date")
    private String date;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "commentId")
    List<CommentImage> commentImages;

    @ManyToOne()
    @JoinColumn(name = "author_id")  // give the name in this table
    private User author;

}
