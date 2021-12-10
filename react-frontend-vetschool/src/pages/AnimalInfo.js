import React, {useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import ProfileNavigation from "../components/ProfileNavigation";
import AnimalProfileCard from "../components/AnimalProfileCard";
import AnimalInfoTable from "../components/AnimalInfoTable";

const AnimalInfo = (props) => {

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <AnimalProfileCard
                            name="Spud"
                            type="Dog"
                            status="Healthy"
                            lastCheckup="2021-10-01"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProfileNavigation/>
                    </Col>
                </Row>
            </Container>
            <Container className="p-2">
                <Row>
                    <Col>
                        <AnimalInfoTable
                            birthdate="2020-05-01"
                            age="2"
                            sex="male"
                            color="Black and White"
                            active="True"
                            chipNum="2345"
                            specialNotes="Is cute but causes trouble"
                        />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default AnimalInfo;
