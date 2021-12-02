import React, {useState} from 'react'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
// import puppyPhoto from '../assets/puppy.jpg';
import puppyPhoto from '../assets/spud.jpg';
import "../styles/AnimalProfileCard.css"

const MedicalIssueProfileCard = ({medicalIssue}) =>  {

    return (
        <div className="p-2">
            <Card className="p-2 AnimalProfileCard" bg={'#e63946'}>
                <Container className="justify-content-center align-content-center">
                    <Row >
                        <Col md={3}>
                            <Image src={puppyPhoto} fluid thumbnail className={"animalImage"}/>
                        </Col>
                        <Col md={4} className="text-start">
                            <h2>{medicalIssue.animal_name}</h2><br/>
                            <h4>Medical Issue: {medicalIssue.medical_issue_name}</h4>
                        </Col>
                        <Col md={4} className="text-start">
                            <b>Status: {medicalIssue.status}</b><br/>
                            <b>Open Date: {medicalIssue.openDate}</b><br/>
                            <b>Close Date: {medicalIssue.closeDate}</b><br/><br/>
                            <Button variant="warning">Request Visit</Button>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default MedicalIssueProfileCard;

