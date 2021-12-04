import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {UserContext} from "../UserContext";
import axios from "axios";


function MedicalIssueModal(props) {

    const [description, setDescription] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const { user, setUser } = useContext(UserContext);
    const [ closed, setClosed ] = useState(true);
    const [animal, setAnimal] = useState({
        "animalName": "Spud"
    })
    // const submitBookingRequest = () => {
    //     console.log("Requested!")
    //     console.log(props.selectedAnimal)
    //     console.log(user)
    //     console.log(date)
    //     console.log(startTime)
    //     console.log(endTime)
    //
    //     const bookingRequest = {
    //         "bookingDate": date,
    //         "startTime": startTime,
    //         "returnTime": endTime,
    //         "adminAppStatus": "Pending",
    //         "animalId": props.selectedAnimal,
    //         "teacherId": user,
    //         "techAppStatus": "Pending"
    //     }
    //
    //     axios.post("http://localhost:8080/api/bookings", bookingRequest)
    //         .then((res)=> console.log(res))
    //         .catch((err) => console.log(err))
    //
    //     props.onHide()
    //     setDate(null)
    //     setDescription(null)
    //     setStartTime(null)
    //     setEndTime(null)
    // }

    const closeModal = () => {
        setStartDate(null)
        setEndDate(null)
        setDescription(null)
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
                    New Medical Issue: {animal.animalName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Medical Issue</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={e => {setDescription(e.target.value)}}
                            type="text"
                            placeholder="Enter Medical Issue"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label>Severity</Form.Label>
                            <Form.Select aria-label="Severity drop down">
                                <option>Select Severity</option>
                                <option value="Critical">Red</option>
                                <option value="Moderate">Yellow</option>
                                <option value="Mild">Green</option>
                            </Form.Select>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Issue Start Date</Form.Label>
                        <Form.Control
                            value={startDate}
                            onChange={e => {setStartDate(e.target.value)}}
                            type="date"
                            placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Check
                            type="switch"
                            id="issueStatus"
                            label="Issue Closed"
                            onClick={() => setClosed(!closed)}
                        />
                        <Form.Label>Issue Close Date</Form.Label>
                        <Form.Control
                            value={endDate}
                            onChange={e => {setEndDate(e.target.value)}}
                            type="date"
                            placeholder="Date"
                            disabled={closed}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="medicalIssueDescription" label="Additional Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"warning"} /*onClick={submitBookingRequest}*/>Save Medical Issue</Button>
                <Button variant={"danger"} onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MedicalIssueModal;