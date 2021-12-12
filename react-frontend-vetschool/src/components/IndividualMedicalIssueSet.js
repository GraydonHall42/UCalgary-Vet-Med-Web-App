import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button} from 'react-bootstrap';
import '../styles/ImageSet.css';

const IndividualMedicalIssueSet = (medicalIssue) => {

    const commentMapping = (comments) => {
        return(
            <Container>
                <Row className="darkGray scrollable ps-4 pb-2 pt-2">
                    {comments.map((commentObject) => ([
                            <Row className="darkGray ps-4 pb-2 pt-2 pe-0 text-white">
                                <Row className="bg-danger rounded pt-1 pb-1" id="title">
                                    <Col>
                                        <h5>Treatment: {commentObject.title}</h5>
                                    </Col>
                                    <Col>
                                        <h5>Treated by: {commentObject.author.name}</h5>
                                    </Col>
                                    <Col>
                                        <h5>Date: {commentObject.date}</h5>
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
    }

    return(
        commentMapping(medicalIssue.medicalIssue.comments)
    )

};

export default IndividualMedicalIssueSet;