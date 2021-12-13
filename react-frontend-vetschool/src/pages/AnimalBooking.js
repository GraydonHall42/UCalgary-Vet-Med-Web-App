import React, {useState, useContext, useEffect} from 'react';
import {Table, Container, Row, Button} from "react-bootstrap";
import axios from 'axios';
import {UserContext} from "../UserContext";
import '../styles/AnimalBooking.css';
import useAuthorization from '../hooks/useAuthorization';


function AnimalBooking() {
    const { user, setUser } = useContext(UserContext);
    let [bookings, setBookings] = useState([]);
    const getAccessToken = useAuthorization();

    function getAllBookings() {
        let config = { headers: {'Authorization': getAccessToken() }}
        axios.get('http://localhost:8080/api/bookings', config)
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
        let config = { headers: {'Authorization': getAccessToken() }}
        axios.delete('http://localhost:8080/api/bookings/' + bookingId, config)
             .then(res => {
                getAllBookings();
            })
            .catch(err => {
                console.log(err);
        })
    }

    function ApproveBooking(booking) 
    {
        if(user.userType === "Admin"){
            if(booking.adminAppStatus === "Approved") return;
            booking.adminAppStatus = "Approved";
            booking.adminAppId = user;

            let config = { headers: {'Authorization': getAccessToken() }}
            axios.put('http://localhost:8080/api/bookings/' + booking.bookingId, booking, config)
            .then(res => {
                getAllBookings();
            })
            .catch(err => {
                console.log(err);
            })
        }
        if(user.userType === "Animal Health Technician"){
            if(booking.techAppStatus === "Approved") return;
            booking.techAppStatus = "Approved";
            booking.techAppId = user;

            let config = { headers: {'Authorization': getAccessToken() }}
            axios.put('http://localhost:8080/api/bookings/' + booking.bookingId, booking, config)
            .then(res => {
                // I dont think you need this because you update the actual state too but good for now to check
                getAllBookings();
            })
            .catch(err => {
                console.log(err);
            })
        }
        
    }

    function RejectBooking(booking) 
    {
        if(user.userType === "Admin"){
            if(booking.adminAppStatus === "Rejected") return;
            booking.adminAppStatus = "Rejected";
            booking.adminAppId = user;

            let config = { headers: {'Authorization': getAccessToken() }}
            axios.put('http://localhost:8080/api/bookings/' + booking.bookingId, booking, config)
            .then(res => {
                getAllBookings();
            })
            .catch(err => {
                console.log(err);
            })
        }
        if(user.userType === "Animal Health Technician"){
            if(booking.techAppStatus === "Rejected") return;
            booking.techAppStatus = "Rejected";
            booking.techAppId = user;

            let config = { headers: {'Authorization': getAccessToken() }}
            axios.put('http://localhost:8080/api/bookings/' + booking.bookingId, booking, config)
            .then(res => {
                // I dont think you need this because you update the actual state too but good for now to check
                getAllBookings();
            })
            .catch(err => {
                console.log(err);
            })
        }
        
    }



    function getActionButtons(booking) 
    {   
        const {adminAppStatus, techAppStatus, bookingId} = booking;

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
                        <Button className="approveButton" onClick={e => ApproveBooking(booking)}>App</Button>
                        <Button className="deleteButton" onClick={e => RejectBooking(booking)}>Rej</Button>
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
                        <Button className="approveButton" onClick={e => ApproveBooking(booking)}>App</Button>
                        <Button className="deleteButton" onClick={e => RejectBooking(booking)}>Rej</Button>
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
                <td>{booking.adminAppStatus === "Pending" ? booking.adminAppStatus : booking.adminAppStatus + " (" +  booking.adminAppId.name + ")"}</td>
                <td>{booking.techAppStatus === "Pending" ? booking.techAppStatus : booking.techAppStatus + " (" +  booking.techAppId.name + ")"}</td>
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
