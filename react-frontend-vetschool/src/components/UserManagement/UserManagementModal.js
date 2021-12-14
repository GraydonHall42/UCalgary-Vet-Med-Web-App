import {Button, Form, Modal} from "react-bootstrap";
import React, {useContext, useState, useEffect} from "react";
import {UserContext} from "../../Context/UserContext";
import axios from "axios";
import useAuthorization from '../../hooks/useAuthorization';


function UserManagementModal(props) {

    const {selectedUser} = props;

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [roleName, setRoleName] = useState(null);
    const [isBlocked, setIsBlocked] = useState(null);
    const getAccessToken = useAuthorization();
    
    useEffect(() => {
        setFirstName(selectedUser.firstName);
        setLastName(selectedUser.lastName);
        setEmail(selectedUser.email);
        setPhone(selectedUser.phone);
        if(selectedUser.roles) setRoleName(selectedUser.roles[0].name);
        setIsBlocked(selectedUser.blocked);
    }, [selectedUser])

    const updateUser = () => {
        console.log("Requested!")
        console.log(selectedUser);
        console.log(selectedUser.userId);
        if(selectedUser.userId === undefined){
            console.log("ADD NEW USER");
            let url = "http://localhost:8080/api/user/save";
            let newUser = {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phone": phone,
                "password": "password",
                "blocked": isBlocked,
            }
            let config = { headers: {'Authorization': getAccessToken() }}
            
            axios.post(url, newUser, config)
                .then(res => {
                    console.log(res.data);
                    let urlRole = "http://localhost:8080/api/role/save";
                    console.log(res.data.userId);
                    console.log(roleName);
                    let newRole = {
                        "userId": res.data.userId,
                        "name": roleName
                    }
                    return axios.post(urlRole, newRole, config);
                })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
   
        }
        else {
            console.log("UPDATE USER");
            let url = "http://localhost:8080/api/user/update/" + selectedUser.userId;
            let updatedUser = {
                "userId": selectedUser.userId,
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phone": phone,
                "password": "password",
                "blocked": isBlocked,
            }
            let config = { headers: {'Authorization': getAccessToken() }}
            axios.put(url, updatedUser, config)
                .then(res => {
                    console.log(res.data);
                    console.log(selectedUser.roles[0].roleId)
                    let urlRole = "http://localhost:8080/api/role/update/" + selectedUser.roles[0].roleId;
                    let updatedRole = {
                        "userId": res.data.userId,
                        "name": roleName
                    }
                    return axios.put(urlRole, updatedRole, config);
                }).then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        props.onHide()
    }

    const closeModal = () => {
        // setFirstName(null);
        // setLastName(null);
        // setPhone(null);
        // setEmail(null);
        // setRoles([{name: ""}]);
        props.onHide();
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Role (Drop down)</Form.Label>
                        <Form.Control 
                                    as="select" 
                                    value={roleName} 
                                    onChange={e => {
                                        console.log(e.target.value);
                                        setRoleName(e.target.value);
                                    }}>
                            <option>Select users role</option>
                            <option value={"ADMIN"}>Admin</option>
                            <option value={"HEALTH_TECH"}>Health Tech</option>
                            <option value={"CARE_ATTENDANT"}>Care Attendant</option>
                            <option value={"TEACHING_TECH"}>Teaching Tech</option>
                            <option value={"STUDENT"}>Student</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="switch"
                            id="isBlocked"
                            label="Block User"
                            checked={isBlocked}
                            onClick={(e) => {
                                console.log(e.target.value)
                                setIsBlocked(!isBlocked)
                            }}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"warning"} onClick={updateUser}>Submit Request</Button>
                <Button variant={"danger"} onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserManagementModal;

