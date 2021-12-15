import React, {useContext, useEffect, useState} from 'react'
import {Button, Card, Col, Container, Dropdown, DropdownButton, Image, Row} from "react-bootstrap";
import "../../styles/AnimalProfileCard.css"
import {AnimalContext} from "../../Context/AnimalContext";
import axios from "axios";
import AnimalStatusButton from "./AnimalStatusButton";

const AnimalProfileCard = (props) =>  {

    const { animal } = useContext(AnimalContext);

    return (

        <div className="p-2">
            <Card className="p-2 AnimalProfileCard" bg={'#e63946'}>
                <Container className="justify-content-center align-content-center">
                    <Row >
                        <Col md={2} className={"text-sm-center text-md-start"}>
                            <Image src={animal.profilePhoto} fluid thumbnail className={"animalImage m-3"}/>
                        </Col>
                        <Col md={6} className="m-1 text-sm-center text-md-start">
                            <h2>{animal.animalName}</h2><br/>
                            <b>Animal Type: </b>{animal.animalType}<br/>
                            <b>Last Checkup: </b>{animal.lastCheckup} <br/><br/>
                        </Col>
                        <Col md={2} className="text-sm-center m-auto">
                            <h4>Animal Status: </h4>
                            <AnimalStatusButton animal={animal}/>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default AnimalProfileCard;

