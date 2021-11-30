import React, {useState} from 'react'
import {
    Button,
    Card,
    Col,
    Container,
    Image,
    Row,
} from "react-bootstrap";
import "../styles/UserProfilePage.css"
import UserProfileField from "../components/UserProfileField";

const UserProfilePage = (props) =>  {

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
                        <UserProfileField fieldLabel="First Name" fieldName={"FirstName"} fieldValue={"Graydon"}/>
                        <UserProfileField fieldLabel="Last Name" fieldName={"LastName"} fieldValue={"Hall"}/>
                        <UserProfileField fieldLabel="Email" fieldName={"Email"} fieldValue={"grady@gmail.com"}/>
                        <UserProfileField fieldLabel="Phone Number" fieldName={"PhoneNum"} fieldValue={"123-456-7890"}/>
                        <Button className={"mt-2"} variant={"success"}>Submit Changes</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserProfilePage;

