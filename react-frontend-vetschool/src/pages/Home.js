import React, {useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import SearchBarWithCriteria from "../components/SearchBarWithCriteria";
import AnimalSearchResults from "../components/AnimalSearchResult";

function Home() {
    const [animals, setAnimals] = useState([
        {
            id:1,
            name:"Spud",
            type:"Dog",
            sex:"Male",
            photoPath:"/images/spud.jpg"
        },
        {
            id:2,
            name:"Rex",
            type:"Dog",
            sex:"Male",
            photoPath:"/images/puppy.jpg"
        },
        {
            id:3,
            name:"Lucy",
            type:"Dog",
            sex:"Female",
            photoPath:"/images/female-puppy.png"
        }
    ])


    return (
        <div>
            <Container className="p-2">
                <Row>
                    <Col>
                        <SearchBarWithCriteria searchOptions ={["Animal Name", "Animal Type"]} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AnimalSearchResults animals={animals}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
