import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button} from 'react-bootstrap';
import '../styles/ImageSet.css';
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/all";
import axios from "axios";
import EditCommentModal from "./EditCommentModal";

const IndividualMedicalIssueSet = (props) => {

    const [modalShow, setModalShow] = useState(false);

    const [selectedComment, setSelectedComment] = useState(null);

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


    return(
        <Container>
            {selectedComment!==null &&
                <EditCommentModal
                    comment={selectedComment}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />}

            <Row className="darkGray scrollable ps-4 pb-2 pt-2">
                {props.medicalIssue.comments.map((commentObject) => ([
                        <Row className="darkGray ps-4 pb-2 pt-2 pe-0 text-white">
                            <Row className="bg-danger rounded pt-1 pb-1 align-content-center text-start" id="title">
                                <Col md={5}>
                                    <h5>Comment: {commentObject.title}</h5>
                                </Col>
                                <Col md={3}>
                                    <h5>Commented by: {commentObject.author.name}</h5>
                                </Col>
                                <Col md={2}>
                                    <h5>Date: {commentObject.date ? formatDate(commentObject.date) : null}</h5>
                                </Col>
                                <Col md={2} className="text-end">
                                    <button className="btn-outline-light me-3" onClick={() => handleClick()}>
                                        <AiOutlineEdit onClick={() => setSelectedComment(commentObject)}/>
                                    </button>
                                    <button className="btn-outline-light" onClick={() => deleteComment(commentObject.commentId)}>
                                        <AiOutlineDelete/>
                                    </button>
                                </Col>
                            </Row>
                            <Row className="bg-light text-black" id="description" style={{ textAlign: "left" }}>
                                <h5>Description:</h5><br/>
                                <p>{commentObject.description}</p>

                            </Row>
                            <Row className="bg-light p-4">
                                {commentObject.commentImages.map((imageImages, key) => (
                                    <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12}>
                                        <Image src={imageImages.image} alt={"animal"} thumbnail className="shadow-lg"/>
                                    </Col>
                                ))}
                            </Row>
                        </Row>]
                ))}
            </Row>
        </Container>
    )
};

export default IndividualMedicalIssueSet;