import React, {useState, useContext, useEffect} from 'react';
import {Table, Container, Row, Button} from "react-bootstrap";
import axios from 'axios';
import {UserContext} from "../UserContext";
import '../styles/AnimalBooking.css';

function AnimalBooking() {
    const { user, setUser } = useContext(UserContext);
    let [bookings, setBookings] = useState([]);

    function getAllBookings() {
        axios.get('http://localhost:8080/api/bookings')
             .then(res => {
                console.log(res.data)
                setBookings(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    
    useEffect(() => {
        getAllBookings();
    }, []);

    function deleteBooking(bookingId) 
    {
        axios.delete('http://localhost:8080/api/bookings/' + bookingId)
             .then(res => {
                console.log(res);
                getAllBookings();
            })
            .catch(err => {
                console.log(err);
        })
    }

    function getActionButtons({adminAppStatus, techAppStatus, bookingId}) 
    {   
        if(user.userType === "Teaching Technician"){
            // can only cancel before tech app or rej
            if(techAppStatus.startsWith("Pend")){
                return <Button className="deleteButton" onClick={e => deleteBooking(bookingId)}>Del</Button>
            }
            else {
                return <Button className="deleteButton" disabled>Del</Button>
            }
        }
        if(user.userType === "Admin"){
            // can only change app status before tech decides
            if(techAppStatus.startsWith("Pend")){
                return (
                    <div>
                        <Button className="approveButton" >App</Button>
                        <Button className="deleteButton" >Rej</Button>
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <Button className="approveButton" disabled>App</Button>
                        <Button className="deleteButton" disabled>Rej</Button>
                    </div>
                )
            }     
        }
        if(user.userType === "Animal Health Technician"){
            // can only app or rej after admin app
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
