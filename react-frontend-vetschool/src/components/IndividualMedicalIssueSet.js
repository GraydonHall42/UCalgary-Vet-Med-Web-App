import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button} from 'react-bootstrap';
import '../styles/ImageSet.css';

const IndividualMedicalIssueSet = ({medicalIssue}) => {

    const commentMapping = (comment) => {
        return(
            <Container>
                <Row className="darkGray scrollable ps-4 pb-2 pt-2">
                    {comment.map((commentObject, index) => ([
                            <Row className="darkGray ps-4 pb-2 pt-2 pe-0 text-white">
                                <Row className="bg-danger rounded pt-1 pb-1" id="title">
                                    <Col>
                                        <h5>{commentObject.title}</h5>
                                    </Col>
                                    <Col>
                                        <h5>Treated by: {commentObject.author}</h5>
                                    </Col>
                                    <Col>
                                        <h5>Date: {commentObject.date}</h5>
                                    </Col>
                                </Row>
                                <Row className="bg-light text-black" id="description" style={{ textAlign: "left" }}>
                                    <h5>Description:</h5><br/>
                                    <p>{commentObject.description}</p>

                                </Row>
                                <Row /*xxl={4} xl={4} lg={4} md={3} sm={2} xs={1} */className="bg-light p-4">

                                    {commentObject.collection.map((imageImages) => (
                                        <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12}>
                                            <Image src={imageImages.image} alt={"animal"} thumbnail className="shadow-lg"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Row>]
                    ))}
                </Row>
                <Row>
                    <Button variant="warning" > Add New Treatment </Button>
                </Row>
            </Container>
        )
    }

    return(
        commentMapping(medicalIssue.treatmentList)
    )

};

export default IndividualMedicalIssueSet;