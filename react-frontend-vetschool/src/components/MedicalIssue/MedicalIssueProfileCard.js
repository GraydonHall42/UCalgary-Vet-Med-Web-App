import React, {useState, useEffect} from 'react'
import {Button, Card, Col, Container, Image, Row, Form} from "react-bootstrap";
import "../../styles/AnimalProfileCard.css"
import axios from "axios";
import AnimalStatusButton from "../AnimalProfile/AnimalStatusButton";
import EditMedicalIssueModal from "./EditMedicalIssueModal";
import useAuthorization from '../../hooks/useAuthorization';

const MedicalIssueProfileCard = (props) =>  {

    const [animal, setAnimal] = useState("");
    const [modalShow, setModalShow] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const getAccessToken = useAuthorization();

    const obtainAnimalById = async(animalId) => {
        let config = { headers: {'Authorization': getAccessToken() }}
        const res = await axios.get("http://localhost:8080/api/animals/"+animalId+"?fields", config)
            .then(response => {
                setAnimal(response.data)
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
    }

    useEffect(() => {
        obtainAnimalById(props.medicalIssue.animalId)
    },[props.medicalIssue])

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
                                <Image src={animal.profilePhoto} fluid thumbnail className={"animalImage"}/>
                            </Col>
                            <Col>
                            <Row>
                                <Col md={4} className="text-start">
                                    <h3>Patient's Name: {animal.animalName}</h3>
                                    <h4>Medical Issue: {props.medicalIssue.issueName}</h4>
                                </Col>
                                <Col md={3} className="text-start">
                                    <b>Priority: {props.medicalIssue.currentStatus}</b><br/>
                                    <b>Open Date: {props.medicalIssue.openDate ? formatDate(props.medicalIssue.openDate) : null}</b><br/>
                                    <b>Close Date: {props.medicalIssue.closeDate ? formatDate(props.medicalIssue.closeDate) : null}</b>
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
                                        value={props.medicalIssue.description}
                                        placeholder="Leave a comment here"
                                        style={{ height: '75px' , backgroundColor: "white"}}
                                        disabled={true}
                                    />
                            </Row>
                            </Col>
                            <EditMedicalIssueModal
                                issues={props.medicalIssue}
                                show={modalShow}
                                onHide={() => handleHide(props)}/>

                        </Row>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default MedicalIssueProfileCard;

