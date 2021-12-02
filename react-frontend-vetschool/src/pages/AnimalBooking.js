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
            "adminApproval": "Approved (Dr. Deylin)",
            "techApproval": "Rejected (Dr. Moshirpour)"

        },
        {
            "healthStatus": "Yellow",
            "animalName": "Greg",
            "visitDate": "2020-10-29",
            "requestingUser": "Dr. Jared",
            "adminApproval": null,
            "techApproval": null
        },
        {
            "healthStatus": "Red",
            "animalName": "Doggo",
            "visitDate": "2020-09-19",
            "requestingUser": "Dr. Alex",
            "adminApproval": "Approved (Dr. Deylin)",
            "techApproval": "Approved (Dr. Moshirpour)"
        },
        {
            "healthStatus": "Red",
            "animalName": "Spud",
            "visitDate": "2020-11-29",
            "requestingUser": "Dr. Grady",
            "adminApproval": "Rejected (Dr. Deylin)",
            "techApproval": null
        },
        {
            "healthStatus": "Yellow",
            "animalName": "Greg",
            "visitDate": "2020-10-29",
            "requestingUser": "Dr. Jared",
            "adminApproval": "Approved (Dr. Deylin)",
            "techApproval": "Approved (Dr. Moshirpour)"
        },
        {
            "healthStatus": "Red",
            "animalName": "Doggo",
            "visitDate": "2020-09-19",
            "requestingUser": "Dr. Alex",
            "adminApproval": "Approved (Dr. Deylin)",
            "techApproval": null
        }
    ])

    const [user, setUser] = useState({name: "Dr. Majid", type: "technician"})

    function getActionButtons({adminApproval, techApproval}) 
    {
        console.log(techApproval + " | " + adminApproval);
        if(user.type === "instructor"){
            if(!techApproval || techApproval.startsWith("Rej")){
                return <Button className="deleteButton" >Del</Button>
            }
            if(techApproval.startsWith("Approved")){
                return <Button className="deleteButton" disabled>Del</Button>
            }
        }
        if(user.type === "admin"){
            if(!techApproval){
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
            if(!adminApproval || adminApproval.startsWith("Rej")){
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
                <td>{booking.healthStatus}</td>
                <td>{booking.animalName}</td>
                <td>{booking.visitDate}</td>
                <td>{booking.requestingUser}</td>
                <td>{booking.adminApproval}</td>
                <td>{booking.techApproval}</td>
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
