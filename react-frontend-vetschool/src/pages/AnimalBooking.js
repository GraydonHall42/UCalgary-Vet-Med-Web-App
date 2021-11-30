import React, {useState} from 'react';
import {Table, Container, Row, Button} from "react-bootstrap";
import '../styles/AnimalBooking.css';

function AnimalBooking() {

    let [bookings, SetBookings] = useState([
        {
            "healthStatus": "Red",
            "animalName": "Spud",
            "visitDate": "2020-11-29",
            "requestingUser": "Dr. Grady",
            "approvalStatus": "Approved (Dr. Deylin)"
        },
        {
            "healthStatus": "Yellow",
            "animalName": "Greg",
            "visitDate": "2020-10-29",
            "requestingUser": "Dr. Jared",
            "approvalStatus": "Approved (Dr. Deylin)"
        },
        {
            "healthStatus": "Red",
            "animalName": "Doggo",
            "visitDate": "2020-09-19",
            "requestingUser": "Dr. Alex",
            "approvalStatus": "Approved (Dr. Deylin)"
        },
        {
            "healthStatus": "Red",
            "animalName": "Spud",
            "visitDate": "2020-11-29",
            "requestingUser": "Dr. Grady",
            "approvalStatus": "Approved (Dr. Deylin)"
        },
        {
            "healthStatus": "Yellow",
            "animalName": "Greg",
            "visitDate": "2020-10-29",
            "requestingUser": "Dr. Jared",
            "approvalStatus": "Approved (Dr. Deylin)"
        },
        {
            "healthStatus": "Red",
            "animalName": "Doggo",
            "visitDate": "2020-09-19",
            "requestingUser": "Dr. Alex",
            "approvalStatus": "Approved (Dr. Deylin)"
        }
    ])

    function renderBookingTable(booking) {
        return (
            <tr className="booking">
                <td>{booking.healthStatus}</td>
                <td>{booking.animalName}</td>
                <td>{booking.visitDate}</td>
                <td>{booking.requestingUser}</td>
                <td>{booking.approvalStatus}</td>
                <td className="actions">
                    <Button className="approveButton" >App</Button>
                    <Button className="deleteButton">Del</Button>
                    <Button className="editButton">Edit</Button>
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
                        <th width={'12%'}>Health Status</th>
                        <th width={'17%'}>Animal Name</th>
                        <th width={'13%'}>Visit Date</th>
                        <th width={'17%'}>Requesting User</th>
                        <th width={'17%'}>Approval Status</th>
                        <th width={'25%'}>Actions</th>
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
