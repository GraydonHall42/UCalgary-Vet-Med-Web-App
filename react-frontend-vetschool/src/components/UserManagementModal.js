import {Button, Form, Modal} from "react-bootstrap";
import React, {useContext, useState, useEffect} from "react";
import {UserContext} from "../UserContext";
import axios from "axios";
import useAuthorization from '../hooks/useAuthorization';


function UserManagementModal(props) {

    const {selectedUser} = props;

    const [firstName, setFirstName] = useState(selectedUser.firstName);
    const [lastName, setLastName] = useState(selectedUser.lastName);
    const [email, setEmail] = useState(selectedUser.email);
    const [phone, setPhone] = useState(selectedUser.phone);
    const [roles, setRoles] = useState(selectedUser.roles);

    const getAccessToken = useAuthorization();
    
    useEffect(() => {
        setFirstName(selectedUser.firstName);
        setLastName(selectedUser.lastName);
        setEmail(selectedUser.email);
        setPhone(selectedUser.phone);
        setRoles(selectedUser.roles);
    })
    // const submitBookingRequest = () => {
    //     console.log("Requested!")
    //     console.log(selectedUser);

    //     const userRequest = {
    //         "bookingDate": date,
    //         "startTime": startTime,
    //         "returnTime": endTime,
    //         "adminAppStatus": "Pending",
    //         "animalId": props.selectedAnimal,
    //         "teacherId": user,
    //         "techAppStatus": "Pending"
    //     }

    //     let config = { headers: {'Authorization': getAccessToken() }}
    //     axios.post("http://localhost:8080/api/bookings", bookingRequest, config)
    //         .then((res)=> console.log(res))
    //         .catch((err) => console.log(err))

    //     props.onHide()
    //     setDate(null)
    //     setDescription(null)
    //     setStartTime(null)
    //     setEndTime(null)
    // }

    const closeModal = () => {
        setFirstName(null)
        setLastName(null)
        setPhone(null)
        setEmail(null)
        setRoles(null)
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
                    Managing User: {selectedUser.firstName + " " + selectedUser.lastName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            value={firstName}
                            onChange={e => {setFirstName(e.target.value)}}
                            type="text"
                            placeholder="Enter first name"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            value={lastName}
                            onChange={e => {setLastName(e.target.value)}}
                            type="text"
                            placeholder="Enter last name"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            value={phone}
                            onChange={e => {setPhone(e.target.value)}}
                            type="phone"
                            placeholder="Enter phone" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            value={email}
                            onChange={e => {setEmail(e.target.value)}}
                            type="email"
                            placeholder="Enter email" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"warning"} >Submit Request</Button>
                <Button variant={"danger"} onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserManagementModal;

