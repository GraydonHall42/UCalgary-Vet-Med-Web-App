import React, {useState} from 'react'
import WeightGraph from "../components/WeightGraph";
import AddWeightForm from "../components/AddWeightForm";
import {Col, Container, Row} from "react-bootstrap";
import AnimalProfileCard from "../components/AnimalProfileCard";
import ProfileNavigation from "../components/ProfileNavigation";



function Weight() {

    const [weightData, setWeightData] = useState([
        {
            weight:10,
            date:"2021-02-01"
        },{
            weight:11,
            date:"2021-04-01"
        },{
            weight:12,
            date:"2021-06-01"
        },{
            weight:13,
            date:"2021-08-01"
        },{
            weight:10,
            date:"2021-10-01"
        }
    ])

    const addWeightData = (weight, date) => {
        let newData = [...weightData, { weight:weight, date: date}]
        newData.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.date) - new Date(b.date);
        });


        setWeightData(newData);
    }


    return (
        <div className="WeightsContainer">
            <Container fluid>
                <AnimalProfileCard
                    name="Spud"
                    type="Dog"
                    status="Healthy"
                    lastCheckup="2021-10-01"
                />
                <Row>
                    <Col>
                        <ProfileNavigation/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="align-items-center justify-content-center p-3">
                    <Col lg={9}>
                        <WeightGraph weightData={{weightData}}/>
                    </Col>
                    <Col lg={3} class = 'card p-3 bg-light' >
                        <AddWeightForm addWeightData={addWeightData}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Weight;

