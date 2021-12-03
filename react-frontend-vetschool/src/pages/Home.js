import React, {useContext, useEffect, useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import SearchBarWithCriteria from "../components/SearchBarWithCriteria";
import AnimalSearchResults from "../components/AnimalSearchResult";
import axios from "axios";
import RequestVisitModal from "../components/RequestVisitModal";
import {UserContext} from "../UserContext";

function Home() {
    const [animals, setAnimals] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState([])


    function getAllAnimals() {
        axios.get('http://localhost:8080/api/animals?fields=images,medicalIssues, prescriptions')
            .then(res => {
                console.log(res.data)
                setAnimals(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getAllAnimals();
    }, []);


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
                        <AnimalSearchResults
                            animals={animals}
                            setModalShow={setModalShow}
                            setSelectedAnimal={setSelectedAnimal}
                        />
                    </Col>
                </Row>
            </Container>

            <RequestVisitModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedAnimal={selectedAnimal}
            />
        </div>
    )
}

export default Home;
