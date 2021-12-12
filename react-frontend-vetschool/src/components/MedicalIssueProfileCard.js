import React, {useState, useEffect} from 'react'
import {Button, Card, Col, Container, FloatingLabel, Image, Row, Form} from "react-bootstrap";
// import puppyPhoto from '../assets/puppy.jpg';
import puppyPhoto from '../assets/spud.jpg';
import "../styles/AnimalProfileCard.css"
import axios from "axios";
import AnimalStatusButton from "./AnimalStatusButton";
import EditMedicalIssueModal from "./EditMedicalIssueModal";

const MedicalIssueProfileCard = ({medicalIssue}) =>  {

    const [animal, setAnimal] = useState("");
    const [modalShow, setModalShow] = useState(null);
    const [medicalIssueState, setMedicalIssueState] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const obtainAnimalById = async(animalId) => {
        const res = await axios.get("http://localhost:8080/api/animals/"+animalId+"?fields")
            .then(response => {
                setAnimal(response.data)
                console.log("hello from obtainanimalbyID")
                console.log(response.data)
                setLoading(false);
            })
            .catch(error => console.log(error))
    }

    const handleClick = () => {
        setModalShow(true);
    }

    const handleHide = () => {
        setModalShow(false);
        window.location.reload();
    }

    useEffect(() => {
        obtainAnimalById(medicalIssue.animalId);
    },[medicalIssue])

    useEffect(() => {
        console.log("rerender because animal changes")
    }, [animal]);  // every time animal changes page will reload...


    function formatDate(string){
        return new Date(string).toISOString().slice(0,10);
    }

    // while awaiting axios...
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

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
                                <Col md={4} className="text-start">
                                    <h3>Patient's Name: {animal.animalName}</h3>
                                    <h4>Medical Issue: {medicalIssue.issueName}</h4>
                                </Col>
                                <Col md={3} className="text-start">
                                    <b>Priority: {medicalIssue.currentStatus}</b><br/>
                                    <b>Open Date: {medicalIssue.openDate ? formatDate(medicalIssue.openDate) : null}</b><br/>
                                    <b>Close Date: {medicalIssue.closeDate ? formatDate(medicalIssue.closeDate) : null}</b>
                                </Col>
                                <Col md={3}>
                                    <h5>Animal Status</h5>
                                    <AnimalStatusButton animal={animal}/>

                                </Col>
                                <Col md={2}>
                                    <Button variant="warning" className="mt-2" onClick={() => handleClick()}>
                                        Edit Issue
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <h4 className="text-start">Description</h4>
                                    <Form.Control
                                        as="textarea"
                                        value={medicalIssue.description}
                                        placeholder="Leave a comment here"
                                        style={{ height: '75px' , backgroundColor: "white"}}
                                        disabled={true}
                                    />
                            </Row>
                            </Col>
                            <EditMedicalIssueModal
                                medicalIssues={medicalIssue}
                                show={modalShow}
                                onHide={() => handleHide(medicalIssue)}/>

                        </Row>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default MedicalIssueProfileCard;

