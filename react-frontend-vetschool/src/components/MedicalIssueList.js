import React, {useState, useEffect, useContext} from 'react'
import {Tabs, Tab, Container, Row, Col, Button, ButtonGroup} from "react-bootstrap";
import '../styles/MedicalIssuesList.css';
import MedicalIssueModal from "./MedicalIssueModal";
import {Link} from "react-router-dom";
import axios from 'axios';
import useAuthorization from '../hooks/useAuthorization';

function MedicalIssueList(props) {

    const [modalShow, setModalShow] = useState(false);
    const [medicalIssueList, setMedicalIssueList] = useState(null);
    const getAccessToken = useAuthorization();

    useEffect(() => {
        setMedicalIssueList(props.medicalData.medicalIssues.map( (issue) => Item(issue)))
    }, [])

    useEffect(() => {
        getMedicalIssuesByAnimalId(props.medicalData.animalId)
    })

    const getMedicalIssuesByAnimalId = (animalId) => {
        let config = { headers: {'Authorization': getAccessToken() }}
        axios.get("http://localhost:8080/api/animals/"+animalId+"?fields=images,weights,prescriptions", config)
            .then(response => setMedicalIssueList(response.data.medicalIssues.map( (issue) => Item(issue))))
            .catch(error => console.log(error))
    }

    const handleClick = () => {
        setModalShow(true)
    }

    const handleHide = () => {
        setModalShow(false)
    }

    function formatDate(string){
        return new Date(string).toISOString().slice(0,10);
    }

    function Item(issue){
        return (
            <Link to={"/medical/"+issue.medicalIssueId}>
                <Button variant="light" className="medicalIssueItem">
                    <Row>
                        <Col className="medicalIssueItemLeft">
                            {issue.issueName}
                        </Col>
                        <Col className="medicalIssueItemRight">
                            {issue.currentStatus}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                        <Col className="medicalIssueItemRight">
                            <div>
                                <p className="closed1" >{issue.closeDate ? "Closed: " : ""}</p>
                                <p className="closed2">{issue.closeDate ? formatDate(issue.closeDate) : "Active"}</p>
                            </div>
                        </Col>
                    </Row>
                </Button>
            </Link>
        )
    }
   
    return (
        <Container className="MedicalListContainer1">
            {medicalIssueList}
            <Button variant="warning" className="addIssueButton" onClick={() => handleClick()}>
                Create a new Medical Issue
            </Button>
            <MedicalIssueModal
                medicalIssues={props.medicalData}
                show={modalShow}
                onHide={() => handleHide(props)}
            />
        </Container>
    )
}

export default MedicalIssueList
