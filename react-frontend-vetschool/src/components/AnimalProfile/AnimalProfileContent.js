import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, Container, Row, Col} from "react-bootstrap";
import WeightGraph from './WeightGraph';
import AddWeightForm from './AddWeightForm';
import MedicalIssueList from './MedicalIssueList';
import AnimalInfoTable from './AnimalInfoTable';
import ImageSet from "./ImageSet";
import '../../styles/AnimalProfileContent.css';
import {AnimalContext} from "../../Context/AnimalContext";

function AnimalProfileContent(props) {
    const [key, setKey] = useState('animalInfo');
    const { animal, setAnimal } = useContext(AnimalContext);

    return (
        <Container>
            <Tabs fill justify activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab className="profileTab" eventKey="animalInfo" title="Animal Info">
                    <Container className="p-2">
                        <Row>
                            <Col>
                                <AnimalInfoTable
                                    birthdate={animal.birthDate}
                                    age={getAge(animal.birthDate)}
                                    sex={animal.sex}
                                    color={animal.color}
                                    active={animal.active}
                                    chipNum={animal.microchipNum}
                                />
                            </Col>
                        </Row>
                </Container>
                </Tab>
                <Tab className="profileTab" eventKey="medical" title="Medical Issues">
                    <MedicalIssueList medicalData={props.medicalData}/>
                </Tab>
                <Tab className="profileTab" eventKey="weight" title="Weights">
                    <Row className="align-items-center justify-content-center p-3">
                        <Col lg={9}>
                            <WeightGraph weightData={props.weightData}/>
                        </Col>
                        <Col lg={3} className = 'card p-3 bg-light' >
                            <AddWeightForm addWeightData={props.addWeightData}/>
                        </Col>
                    </Row>
                </Tab>
                <Tab className="profileTab" eventKey="images" title="Images">
                    <ImageSet animal={animal}/>
                </Tab>
            </Tabs>
        </Container>
    )

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}

export default AnimalProfileContent
