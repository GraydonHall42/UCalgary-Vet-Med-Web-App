import {Button, Form, Modal} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {UserContext} from "../UserContext";
import axios from "axios";
import useAuthorization from '../hooks/useAuthorization';


function RequestVisitModal(props) {

    const [description, setDescription] = useState(null)
    const [date, setDate] = useState(null)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const { user, setUser } = useContext(UserContext);
    const getAccessToken = useAuthorization();
    

    const submitBookingRequest = () => {
        console.log("Requested!")
        console.log(props.selectedAnimal)
        console.log(user)
        console.log(date)
        console.log(startTime)
        console.log(endTime)

        const bookingRequest = {
            "bookingDate": date,
            "startTime": startTime,
            "returnTime": endTime,
            "adminAppStatus": "Pending",
            "animalId": props.selectedAnimal,
            "teacherId": user,
            "techAppStatus": "Pending"
        }

        let config = { headers: {'Authorization': getAccessToken() }}
        axios.post("http://localhost:8080/api/bookings", bookingRequest, config)
            .then((res)=> console.log(res))
            .catch((err) => console.log(err))

        props.onHide()
        setDate(null)
        setDescription(null)
        setStartTime(null)
        setEndTime(null)
    }

    const closeModal = () => {
        setDate(null)
        setDescription(null)
        setStartTime(null)
        setEndTime(null)
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
                    Request Animal Visit: {props.selectedAnimal.animalName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={e => {setDescription(e.target.value)}}
                            type="text"
                            placeholder="Enter Description"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Request Date</Form.Label>
                        <Form.Control
                            value={date}
                            onChange={e => {setDate(e.target.value)}}
                            type="date"
                            placeholder="Date" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control
                            value={startTime}
                            onChange={e => {setStartTime(e.target.value)}}
                            type="time"
                            placeholder="Start Time" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control
                            value={endTime}
                            onChange={e => {setEndTime(e.target.value)}}
                            type="time"
                            placeholder="Start Time"
                        />

                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"warning"} onClick={submitBookingRequest}>Submit Request</Button>
                <Button variant={"danger"} onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RequestVisitModal;

