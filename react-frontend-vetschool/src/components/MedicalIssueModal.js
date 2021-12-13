import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {UserContext} from "../UserContext";
import axios from "axios";
import individualMedicalIssueSet from "./IndividualMedicalIssueSet";
import useAuthorization from '../hooks/useAuthorization';


function MedicalIssueModal(props) {

    const {animalId} = useParams()
    const [issueName, setIssueName] = useState(null);
    const [currentStatus, setCurrentStatus] = useState(null);
    const [openDate, setOpenDate] = useState(null);
    const [closeDate, setCloseDate] = useState(null);
    const [description, setDescription] = useState(null);
    const [closed, setClosed] = useState(true);
    const getAccessToken = useAuthorization();

    const submitMedicalIssue = () => {
        console.log("Requested!")
        console.log(animalId)
        console.log(issueName)
        console.log(currentStatus)
        console.log(openDate)
        console.log(closeDate)
        console.log(description)

        let medicalIssue = {
            "animalId": animalId,
            "issueName": issueName,
            "currentStatus": currentStatus,
            "openDate": openDate,
            "closeDate": closeDate,
            "description": description,
            "comments": []
        }

        let config = { headers: {'Authorization': getAccessToken() }}

        axios.post("http://localhost:8080/api/medical", medicalIssue, config)
            .then((res)=> console.log(res))
            .catch((err) => console.log(err))

        setIssueName(null);
        setCurrentStatus(null);
        setOpenDate(null);
        setCloseDate(null);
        setDescription(null);
        props.onHide()
    }

    const closeModal = () => {
        setIssueName(null);
        setCurrentStatus(null);
        setOpenDate(null);
        setCloseDate(null);
        setDescription(null);
        props.onHide()
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Medical Issue
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Medical Issue</Form.Label>
                        <Form.Control
                            onChange={e => {setIssueName(e.target.value)}}
                            type="text"
                            placeholder="Enter Medical Issue"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Severity</Form.Label>
                            <Form.Select aria-label="Severity drop down"
                                         onChange={e => {
                                             setCurrentStatus(e.target.value) }}>
                                <option>Select Severity</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High" >High</option>
                            </Form.Select>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Issue Start Date</Form.Label>
                        <Form.Control
                            onChange={e => {setOpenDate(e.target.value)}}
                            type="date"
                            placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="switch"
                            id="issueStatus"
                            label="Issue Closed"
                            onClick={() => setClosed(!closed)}
                        />
                        <Form.Label>Issue Close Date</Form.Label>
                        <Form.Control
                            onChange={e => {setCloseDate(e.target.value)}}
                            type="date"
                            placeholder="Date"
                            disabled={closed}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FloatingLabel controlId="medicalIssueDescription" label="Additional Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                onChange={e => {setDescription(e.target.value)}}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"warning"} onClick={submitMedicalIssue}>Save Medical Issue</Button>
                <Button variant={"danger"} onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MedicalIssueModal;