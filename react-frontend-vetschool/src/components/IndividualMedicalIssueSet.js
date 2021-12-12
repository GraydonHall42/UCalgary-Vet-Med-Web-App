import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button} from 'react-bootstrap';
import '../styles/ImageSet.css';
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/all";
import axios from "axios";
import EditCommentModal from "./EditCommentModal";

const IndividualMedicalIssueSet = (medicalIssue) => {

    const [modalShow, setModalShow] = useState(false);

    function formatDate(string){
        return new Date(string).toISOString().slice(0,10);
    }

    const handleClick = () => {
        setModalShow(true);
    }

    const deleteComment = (commentId) => {
        axios.delete("http://localhost:8080/api/comments/"+commentId)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        window.location.reload()
    }

    const commentMapping = (comment) => {
        return(
            <Container>
                <Row className="darkGray scrollable ps-4 pb-2 pt-2">
                            <Row className="darkGray ps-4 pb-2 pt-2 pe-0 text-white">
                                <EditCommentModal
                                    props={comment}
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}/>
                                <Row className="bg-danger rounded pt-1 pb-1 align-content-center text-start" id="title">
                                    <Col md={5}>
                                        <h5>Comment: {comments.title}</h5>
                                    </Col>
                                    <Col md={3}>
                                        <h5>Commented by: {comments.author.name}</h5>
                                    </Col>
                                    <Col md={2}>
                                        <h5>Date: {comments.date ? formatDate(comments.date) : null}</h5>
                                    </Col>
                                    <Col md={2} className="text-end">
                                        <button className="btn-outline-light me-3" onClick={() => handleClick()}>
                                            <AiOutlineEdit/>
                                        </button>
                                        <button className="btn-outline-light" onClick={() => deleteComment(comments.commentId)}>
                                            <AiOutlineDelete/>
                                        </button>
                                    </Col>
                                </Row>
                                <Row className="bg-light text-black" id="description" style={{ textAlign: "left" }}>
                                    <h5>Description:</h5><br/>
                                    <p>{comments.description}</p>

                                </Row>
                                <Row className="bg-light p-4">
                                    {comments.commentImages.map((imageImages, key) => (
                                        <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12}>
                                            <Image src={imageImages.image} alt={"animal"} thumbnail className="shadow-lg"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Row>
                </Row>
            </Container>
        )
    }

    return(
        medicalIssue.medicalIssue.comments.map((comment) => commentMapping(comment))
    )

};

export default IndividualMedicalIssueSet;