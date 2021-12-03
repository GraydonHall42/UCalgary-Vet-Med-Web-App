import React, {useState, useContext} from 'react';
import {Table, Container, Row, Button} from "react-bootstrap";
import {UserContext} from "../UserContext";
import '../styles/AnimalBooking.css';

function AnimalBooking() {

    let [bookings, SetBookings] = useState([
        {
            "bookingId": 1,
            "bookingDate": "2021-11-15",
            "startTime": "12:00:00",
            "returnTime": "13:00:00",
            "adminAppStatus": "Approved",
            "animalId": {
                "animalId": 1,
                "animalName": "Sally",
                "animalType": "Dog"
            },
            "teacherId": {
                "userId": 6,
                "name": "Instructor_1",
                "email": "instruct@gmail.com",
                "password": "pt@123",
                "userType": "Teaching Technician"
            },
            "adminAppId": {
                "userId": 7,
                "name": "Admin_1",
                "email": "admin@gmail.com",
                "password": "pa",
                "userType": "Admin"
            },
            "techAppId": {
                "userId": 8,
                "name": "Technician",
                "email": "tech@gmail.com",
                "password": "pe",
                "userType": "Animal Health Technician"
            },
            "techAppStatus": "Approved"
        },
        {
            "bookingId": 2,
            "bookingDate": "2021-11-16",
            "startTime": "12:00:00",
            "returnTime": "13:00:00",
            "adminAppStatus": "Rejected",
            "animalId": {
                "animalId": 2,
                "animalName": "Jimmy",
                "animalType": "Dog"
            },
            "teacherId": {
                "userId": 6,
                "name": "Instructor_1",
                "email": "instruct@gmail.com",
                "password": "pt@123",
                "userType": "Teaching Technician"
            },
            "adminAppId": {
                "userId": 7,
                "name": "Admin_1",
                "email": "admin@gmail.com",
                "password": "pa",
                "userType": "Admin"
            },
            "techAppId": null,
            "techAppStatus": "Pending"
        },
        {
            "bookingId": 3,
            "bookingDate": "2021-11-15",
            "startTime": "12:00:00",
            "returnTime": "13:00:00",
            "adminAppStatus": "Approved",
            "animalId": {
                "animalId": 3,
                "animalName": "Ralph",
                "animalType": "Cat"
            },
            "teacherId": {
                "userId": 6,
                "name": "Instructor_1",
                "email": "instruct@gmail.com",
                "password": "pt@123",
                "userType": "Teaching Technician"
            },
            "adminAppId": {
                "userId": 7,
                "name": "Admin_1",
                "email": "admin@gmail.com",
                "password": "pa",
                "userType": "Admin"
            },
            "techAppId": null,
            "techAppStatus": "Pending"
        },
        {
            "bookingId": 4,
            "bookingDate": "2021-11-16",
            "startTime": "12:00:00",
            "returnTime": "13:00:00",
            "adminAppStatus": "Pending",
            "animalId": {
                "animalId": 4,
                "animalName": "Buttercup",
                "animalType": "Cat"
            },
            "teacherId": {
                "userId": 6,
                "name": "Instructor_1",
                "email": "instruct@gmail.com",
                "password": "pt@123",
                "userType": "Teaching Technician"
            },
            "adminAppId": null,
            "techAppId": null,
            "techAppStatus": "Pending"
        },
        {
            "bookingId": 5,
            "bookingDate": "2021-11-15",
            "startTime": "12:00:00",
            "returnTime": "13:00:00",
            "adminAppStatus": "Approved",
            "animalId": {
                "animalId": 1,
                "animalName": "Sally",
                "animalType": "Dog"
            },
            "teacherId": {
                "userId": 6,
                "name": "Instructor_1",
                "email": "instruct@gmail.com",
                "password": "pt@123",
                "userType": "Teaching Technician"
            },
            "adminAppId": {
                "userId": 7,
                "name": "Admin_1",
                "email": "admin@gmail.com",
                "password": "pa",
                "userType": "Admin"
            },
            "techAppId": {
                "userId": 8,
                "name": "Technician",
                "email": "tech@gmail.com",
                "password": "pe",
                "userType": "Animal Health Technician"
            },
            "techAppStatus": "Rejected"
        },
        {
            "bookingId": 6,
            "bookingDate": "2021-11-16",
            "startTime": "12:00:00",
            "returnTime": "13:00:00",
            "adminAppStatus": "Approved",
            "animalId": {
                "animalId": 2,
                "animalName": "Jimmy",
                "animalType": "Dog"
            },
            "teacherId": {
                "userId": 6,
                "name": "Instructor_1",
                "email": "instruct@gmail.com",
                "password": "pt@123",
                "userType": "Teaching Technician"
            },
            "adminAppId": {
                "userId": 7,
                "name": "Admin_1",
                "email": "admin@gmail.com",
                "password": "pa",
                "userType": "Admin"
            },
            "techAppId": null,
            "techAppStatus": "Pending"
        },
        {
            "bookingId": 7,
            "bookingDate": "2021-11-15",
            "startTime": "12:00:00",
            "returnTime": "13:00:00",
            "adminAppStatus": "Pending",
            "animalId": {
                "animalId": 3,
                "animalName": "Ralph",
                "animalType": "Cat"
            },
            "teacherId": {
                "userId": 6,
                "name": "Instructor_1",
                "email": "instruct@gmail.com",
                "password": "pt@123",
                "userType": "Teaching Technician"
            },
            "adminAppId": null,
            "techAppId": null,
            "techAppStatus": "Pending"
        },
        {
            "bookingId": 8,
            "bookingDate": "2021-11-16",
            "startTime": "12:00:00",
            "returnTime": "13:00:00",
            "adminAppStatus": "Pending",
            "animalId": {
                "animalId": 4,
                "animalName": "Buttercup",
                "animalType": "Cat"
            },
            "teacherId": {
                "userId": 6,
                "name": "Instructor_1",
                "email": "instruct@gmail.com",
                "password": "pt@123",
                "userType": "Teaching Technician"
            },
            "adminAppId": null,
            "techAppId": null,
            "techAppStatus": "Pending"
        }
    ])

    const [user, setUser] = useContext(UserContext);

    function getActionButtons({adminAppStatus, techAppStatus}) 
    {   
        if(user.type === "instructor"){
            if(techAppStatus.startsWith("Pend") || techAppStatus.startsWith("Rej")){
                return <Button className="deleteButton" >Del</Button>
            }
            if(techAppStatus.startsWith("Approved")){
                return <Button className="deleteButton" disabled>Del</Button>
            }
        }
        if(user.type === "admin"){
            if(techAppStatus.startsWith("Pend")){
                return (
                    <div>
                        <Button className="approveButton" disabled>App</Button>
                        <Button className="deleteButton" disabled>Rej</Button>
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <Button className="approveButton" >App</Button>
                        <Button className="deleteButton" >Rej</Button>
                    </div>
                )
            }     
        }
        if(user.type === "technician"){
            if(adminAppStatus.startsWith("Pend") || adminAppStatus.startsWith("Rej")){
                return (
                    <div>
                        <Button className="approveButton" disabled>App</Button>
                        <Button className="deleteButton" disabled>Rej</Button>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <Button className="approveButton" >App</Button>
                        <Button className="deleteButton">Rej</Button>
                    </div>
                )
            }
        }
    }
    
    function renderBookingTable(booking) {
        return (
            <tr className="booking">
                <td>{"Red"}</td>
                <td>{booking.animalId.animalName}</td>
                <td>{booking.bookingDate}</td>
                <td>{booking.teacherId.name}</td>
                <td>{booking.adminAppStatus === "Pending" ? booking.adminAppStatus : booking.adminAppStatus + "(" +  booking.adminAppId.name + ")"}</td>
                <td>{booking.techAppStatus === "Pending" ? booking.techAppStatus : booking.techAppStatus + "(" +  booking.techAppId.name + ")"}</td>
                <td className="actions">
                    {
                        getActionButtons(booking)
                    }
                    
                </td>
            </tr>
        )
    }


    return (
        <Container>
            <Row className="titleContainer">
                <h1>Animal Booking Dashboard</h1>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th width={'10%'}>Health Status</th>
                        <th width={'12%'}>Animal Name</th>
                        <th width={'11%'}>Visit Date</th>
                        <th width={'12%'}>Requesting User</th>
                        <th width={'18%'}>Admin Approval</th>
                        <th width={'18%'}>Tech Approval</th>
                        <th width={'15%'}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => renderBookingTable(booking))}
                </tbody>
            </Table>
        </Container>
    )
}

export default AnimalBooking
