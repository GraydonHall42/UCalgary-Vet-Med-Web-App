import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {UserContext} from "../UserContext";
import axios from "axios";
import individualMedicalIssueSet from "./IndividualMedicalIssueSet";
import {renderToString} from "react-dom/server";


function EditMedicalIssueModal(props) {

    const [animalId, setAnimalId] = useState(null)
    const [issueName, setIssueName] = useState(null);
    const [currentStatus, setCurrentStatus] = useState(null);
    const [openDate, setOpenDate] = useState(null);
    const [closeDate, setCloseDate] = useState(null);
    const [description, setDescription] = useState(null);
    const [closed, setClosed] = useState(null);

    const setDefaults = () => {
        setAnimalId(animalId ? animalId : props.medicalIssues.animalId);
        setIssueName(issueName ? issueName : props.medicalIssues.issueName);
        setCurrentStatus(currentStatus ? currentStatus : props.medicalIssues.currentStatus);
        setOpenDate(openDate ? openDate : props.medicalIssues.openDate);
        setCloseDate(closed ? (closeDate ? closeDate : props.medicalIssues.closeDate) : null);
        setDescription(description ? description : props.medicalIssues.description)
    }

    function formatDate(string){
        return new Date(string).toISOString().slice(0,10);
    }

    useEffect(() => {
        setDefaults()
    })

    useEffect (() => {
        setClosed(props.medicalIssues.closeDate ? true : false)
    },[props.medicalIssues.closeDate])

    const submitMedicalIssue = () => {
        console.log("Requested!")
        console.log(animalId)
        console.log(issueName)
        console.log(currentStatus)
        console.log(openDate)
        console.log(closeDate)
        console.log(description)
        console.log(closed)

        let medicalIssue = {
            "animalId": animalId,
            "issueName": issueName,
            "currentStatus": currentStatus,
            "openDate": openDate,
            "closeDate": closeDate,
            "description": description,
            "comments": []
        }

        axios.put("http://localhost:8080/api/medical/" + props.medicalIssue.medicalIssueId, medicalIssue)
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
                    Edit Medical Issue
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Medical Issue</Form.Label>
                        <Form.Control
                            defaultValue={props.medicalIssues.issueName}
                            onChange={e => {setIssueName(e.target.value)}}
                            type="text"
                            placeholder={"Issue Name"}
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Severity</Form.Label>
                        <Form.Select aria-label="Severity drop down"
                                     defaultValue={props.medicalIssues.currentStatus}
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
                            defaultValue={props.medicalIssues.openDate ? formatDate(props.medicalIssues.openDate) : null}
                            onChange={e => {setOpenDate(e.target.value)}}
                            type="date"
                            placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="switch"
                            id="issueStatus"
                            label="Issue Closed"
                            onChange={e => setClosed(e.target.checked)}
                            defaultChecked={props.medicalIssues.closeDate ? true : false}
                        />
                        <Form.Label>Issue Close Date</Form.Label>
                        <Form.Control id="closeDate"
                            defaultValue={props.medicalIssues.closeDate ? formatDate(props.medicalIssues.closeDate) : null}
                            onChange={e => {setCloseDate(e.target.value)}}
                            type="date"
                            placeholder="Date"
                            disabled={!closed}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FloatingLabel controlId="medicalIssueDescription" label="Additional Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                defaultValue={props.medicalIssues.description}
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

export default EditMedicalIssueModal;