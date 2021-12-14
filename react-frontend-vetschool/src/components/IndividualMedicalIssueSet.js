import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Image, Form} from 'react-bootstrap';
import '../styles/ImageSet.css';
import {AiOutlineEdit, AiOutlineDelete, AiFillCloseCircle} from "react-icons/all";
import axios from "axios";
import EditCommentModal from "./EditCommentModal";
import useAuthorization from '../hooks/useAuthorization';

const IndividualMedicalIssueSet = (props) => {

    const [loading, setLoading] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [commentSet, setCommentSet] = useState(null);
    const [trigger, setTrigger] = useState(false);
    const [selectedComment, setSelectedComment] = useState(null);
    const getAccessToken = useAuthorization();

    let config = { headers: {'Authorization': getAccessToken() }}

    function formatDate(string){
        return new Date(string).toISOString().slice(0,10);
    }

    const handleClick = () => {
        setModalShow(true);
    }

    const deleteComment = (commentId) => {

        console.log(commentId)
        axios.delete("http://localhost:8080/api/comments/"+commentId, config)
            .then(response => {console.log(response)
                getMedicalIssues()})
            .catch(error => console.log(error));
    }

    const deleteImage = (commentPhotoId) => {
        axios.delete("http://localhost:8080/api/treatment-images/"+commentPhotoId, config)
            .then(response => {console.log(response)
            getMedicalIssues()})
            .catch(error => console.log(error))
        setTrigger(!trigger);
    }

    useEffect(() => {
        getMedicalIssues()
    }, [])

    useEffect(() => {
        getMedicalIssues()
    }, [modalShow])

    const getMedicalIssues = () => {
        axios.get("http://localhost:8080/api/comments/medicalIssue/"+props.medicalIssue.medicalIssueId, config)
            .then(response => {setCommentSet(response.data)
                console.log(response.data)
                setLoading(false)})
            .catch(error => console.log(error))
    }

    if(loading) {
        return <div>Loading...</div>
    }

    const medicalIssueMapping = (commentSet) => {
        console.log(commentSet)
        return (
            <>
                {selectedComment!==null &&
                    <EditCommentModal
                        comment={selectedComment}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />}

                <Row className="darkGray scrollable ps-4 pb-2 pt-2">
                    {commentSet.map((commentObject, index) => ([
                            <Row className="darkGray ps-4 pb-2 pt-2 pe-0 text-white" key={index}>
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
                                    <Form.Control
                                        as="textarea"
                                        value={commentObject.description}
                                        style={{ height: '75px' , backgroundColor: "white"}}
                                        disabled={true}
                                    />

                                </Row>
                                <Row className="bg-light p-4">
                                    {commentObject.commentImages.map((imageImages, index) => (
                                        <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
                                            <button className="btn-outline-black highMarginRight mb-0" onClick={() => deleteImage(imageImages.commentPhotoId)}>
                                                <AiFillCloseCircle/>
                                            </button>
                                            <Image src={imageImages.image} alt={"animal"} thumbnail className="shadow-lg"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Row>]
                    ))}
                </Row>
            </>
        )
    }

    return (
        <Container>
            {medicalIssueMapping(commentSet)}
        </Container>
    )

};

export default IndividualMedicalIssueSet;