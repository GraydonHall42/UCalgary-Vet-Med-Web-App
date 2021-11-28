import React, {useState} from 'react'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import puppyPhoto from '../assets/puppy.jpg';
import "../styles/AnimalProfileCard.css"
import ForestImage from '../assets/forestbackground.jpg';

const AnimalProfileCard = (props) =>  {

    return (
        <div className="p-2">
            <Card className="p-2 AnimalProfileCard" bg={'#e63946'}>
            <Container>
                <Row >
                    <Col md={3}>
                        <Image src={puppyPhoto} fluid thumbnail className={"animalImage"}/>
                    </Col>
                    <Col md={4} className="text-start">
                        <h2>{props.name}</h2><br/>
                        <b>Animal Type: </b>{props.type}
                    </Col>
                    <Col md={4} className="text-start">
                        <b>Status: </b>{props.status} <br/><br/>
                        <b>Last Checkup: </b>{props.lastCheckup} <br/><br/>
                        <Button variant="warning">Request Visit</Button>
                    </Col>
                </Row>
            </Container>
            </Card>
        </div>
    )
}

export default AnimalProfileCard;

