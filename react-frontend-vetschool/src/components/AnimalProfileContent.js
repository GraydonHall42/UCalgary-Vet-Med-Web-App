import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, Container, Row, Col} from "react-bootstrap";
import WeightGraph from './WeightGraph';
import AddWeightForm from './AddWeightForm';
import MedicalIssueList from './MedicalIssueList';
import AnimalInfoTable from './AnimalInfoTable';
import ImageSet from "./ImageSet";
import '../styles/AnimalProfileContent.css';

function AnimalProfileContent(props) {
    const [key, setKey] = useState('medical');

    return (
        <Container>
            <Tabs fill justify activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab className="profileTab" eventKey="medical" title="Medical Issues">
                    <MedicalIssueList medicalData={props.medicalData}/>
                </Tab>
                <Tab className="profileTab" eventKey="animalInfo" title="Animal Info">
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
                </Tab>
                <Tab className="profileTab" eventKey="weight" title="Weights">
                    <Row className="align-items-center justify-content-center p-3">
                        <Col lg={9}>
                            <WeightGraph weightData={props.weightData}/>
                        </Col>
                        <Col lg={3} class = 'card p-3 bg-light' >
                            <AddWeightForm addWeightData={props.addWeightData}/>
                        </Col>
                    </Row>
                </Tab>
                <Tab className="profileTab" eventKey="images" title="Images">
                    <ImageSet />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default AnimalProfileContent
