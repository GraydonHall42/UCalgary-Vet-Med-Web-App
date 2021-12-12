import React, {useState, useEffect} from 'react'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
// import puppyPhoto from '../assets/puppy.jpg';
import puppyPhoto from '../assets/spud.jpg';
import "../styles/AnimalProfileCard.css"
import axios from "axios";

const MedicalIssueProfileCard = ({medicalIssue}) =>  {

    const [animalName, setAnimalName] = useState("");

    const obtainAnimalName = (animalId) => {
        axios.get("http://localhost:8080/api/animals/"+animalId+"?fields")
            .then(response => {setAnimalName(response.data.animalName)
                console.log(response.data.name)})
            .catch(error => console.log(error))
    }

    useEffect(() => {
        obtainAnimalName(medicalIssue.animalId);
    },[medicalIssue])

    return (
        <div className="p-2">
            <Card className="p-2 AnimalProfileCard" bg={'#e63946'}>
                <Container className="justify-content-center align-content-center">
                    <Row >
                        <Row>
                            <Col xs={3}>
                                <Image src={puppyPhoto} fluid thumbnail className={"animalImage"}/>
                            </Col>
                            <Col>
                            <Row>
                                <Col xs={6} className="text-start">
                                    <h3>Patient's Name: {animalName}</h3>
                                    <h4>Medical Issue: {medicalIssue.issueName}</h4>
                                </Col>
                                <Col xs={6} className="text-start">
                                    <b>Status: {medicalIssue.currentStatus}</b><br/>
                                    <b>Open Date: {medicalIssue.openDate}</b><br/>
                                    <b>Close Date: {medicalIssue.closeDate}</b>
                                </Col>
                            </Row>
                            <Row>
                                <h4 className="text-start">Description</h4>
                                <p className="text-start">{medicalIssue.description}</p>
                            </Row>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default MedicalIssueProfileCard;

