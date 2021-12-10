import React, {useContext, useEffect, useState} from 'react'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import "../styles/AnimalProfileCard.css"
import {AnimalContext} from "../AnimalContext";

const AnimalProfileCard = (props) =>  {

    const { animal } = useContext(AnimalContext);

    return (

        <div className="p-2">
            <Card className="p-2 AnimalProfileCard" bg={'#e63946'}>
                <Container className="justify-content-center align-content-center">
                    <Row >
                        <Col md={3}>
                            <Image src={animal.profilePhoto} fluid thumbnail className={"animalImage"}/>
                        </Col>
                        <Col md={4} className="text-start">
                            <h2>{animal.animalName}</h2><br/>
                            <b>Animal Type: </b>{animal.animalType}
                        </Col>
                        <Col md={4} className="text-start">
                            <b>Status: </b>{animal.status} <br/><br/>
                            <b>Last Checkup: </b>{animal.lastCheckup} <br/><br/>
                            <Button variant="warning">Request Visit</Button>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default AnimalProfileCard;

