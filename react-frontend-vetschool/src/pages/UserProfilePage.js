import React, {useState, useEffect, useContext} from 'react'
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import axios from 'axios';
import UserProfileField from "../components/UserProfileField";
import {UserContext} from "../UserContext";
import useAuthorization from "../hooks/useAuthorization.js";
import "../styles/UserProfilePage.css"

const UserProfilePage = (props) =>  {

    const { user, setUser } = useContext(UserContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [openFields, setOpenFields] = useState(0);
    const getAccessToken = useAuthorization();



    const updateUser = () => {
        
        if(firstName !== "") user.firstName = firstName;
        if(lastName !== "") user.lastName = lastName;
        if(email !== "") user.email = email;
        if(phone !== "") user.phone = phone;
        
        let url = 'http://localhost:8080/api/user/update/' + user.userId;
        let config = { headers: {'Authorization': getAccessToken() }}

        console.log(url);
        console.log(config);
    
        axios.put(url, user, config)
            .then(res => {
                setUser(res.data);
                setMessage("Update Successful!")
            })
            .catch(err => {
                console.log(err);
                setMessage("Update Unsuccessful!")
            })
    }

    return(
        <div>
            <div className={"userProfilePhoto"}>
                <Card style={{ width: '20%' }} className={"m-2 mx-auto"}>
                    <Card.Header className={"UserInfoTitle"}>Profile Photo</Card.Header>
                    <Image src={"/images/guy3.jpg"}></Image>
                    <Button variant={"warning"} className={""}>Edit Profile Photo</Button>
                </Card>
            </div>


            <Container >
                <Row>
                    <Col>
                        <Card.Header className={"UserInfoTitle"}>User Information</Card.Header>
                        <UserProfileField fieldLabel="First Name" fieldName={"FirstName"} fieldValue={user.firstName} setValue={setFirstName} openFields={openFields} setOpenFields={setOpenFields}/>
                        <UserProfileField fieldLabel="Last Name" fieldName={"LastName"} fieldValue={user.lastName} setValue={setLastName} openFields={openFields} setOpenFields={setOpenFields}/>
                        <UserProfileField fieldLabel="Email" fieldName={"Email"} fieldValue={user.email} setValue={setEmail} openFields={openFields} setOpenFields={setOpenFields}/>
                        <UserProfileField fieldLabel="Phone Number" fieldName={"PhoneNum"} fieldValue={user.phone} setValue={setPhone} openFields={openFields} setOpenFields={setOpenFields}/>
                        
                        {
                            openFields === 0
                            ?
                            <Button className={"mt-2"} variant={"success"} onClick={updateUser} >Submit Changes</Button>
                            :
                            <Button className={"mt-2"} variant={"success"} disabled >Submit Changes</Button>
                        }
                        
                        <p className='message'>{message}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserProfilePage;

