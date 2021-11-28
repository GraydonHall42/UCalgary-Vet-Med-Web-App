import React, {useState} from 'react'
import WeightGraph from "../components/WeightGraph";
import WeightAdder from "../components/WeightAdder";
import {Col, Container, Row} from "react-bootstrap";


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
            <Container>
                <Row className="align-items-center justify-content-center p-5">
                    <Col sm={8}>
                        <WeightGraph weightData={{weightData}}/>
                    </Col>
                    <Col sm={4} class = 'card p-3 bg-light' >
                        <WeightAdder addWeightData={addWeightData}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Weight;

