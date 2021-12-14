import React, {useEffect, useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import SearchBarWithCriteria from "../components/SearchBarWithCriteria";
import AnimalSearchResults from "../components/AnimalSearchResult";
import axios from "axios";
import RequestVisitModal from "../components/RequestVisitModal";
import {UserContext} from "../UserContext";
import useAuthorization from '../hooks/useAuthorization';

function Home() {
    const [animals, setAnimals] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState([])
    const [reRender, setReRender] = useState(false);
    const [searchEntry, setSearchEntry] = useState("");
    const [searchCriteria,setSearchCriteria]=useState("Animal Name");
    const getAccessToken = useAuthorization();
    
    
    function getAllAnimals() {
        
        let config = { headers: {'Authorization': getAccessToken() }}

        axios.get('http://localhost:8080/api/animals?fields=images,medicalIssues,prescriptions', config)
            .then(res => {
                setAnimals(res.data)
            })
            .catch(err => {
                console.log(err);
            })

    }

    useEffect(() => {
        getAllAnimals();
    }, []);



    useEffect(() => {
        const search = () => {
            // search criteria: Animal name or animal type
            let endPoint = 'http://localhost:8080/api/animals?fields=images,medicalIssues, prescriptions';
            if(searchEntry !== ""){
                if(searchCriteria==="Animal Name"){
                    endPoint = 'http://localhost:8080/api/animals/byName/';
                }else if(searchCriteria==="Animal Type"){
                    endPoint= 'http://localhost:8080/api/animals/byType/'
                }
            }

            let config = { headers: {'Authorization': getAccessToken() }}

            // get request to back end
            axios.get(endPoint+searchEntry, config)
                .then(res => {
                    setAnimals(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        };




        if (!animals.length) {
            search();
        }

        const id = setTimeout(() => {
            search()
            // if (searchEntry) {
            //     search();
            // } else {
            //     console.log("searching on interval animal list");
            //     search();
            // }
        }, 500);

        // the only thing you can return is a function in a useEffect
        // runs when the component unmounts OR at the start of a new render
        // this is why we see the function run at the beginning of the render
        // use this to clean up our timer
        return () => {
            clearTimeout(id);
        };
    }, [searchEntry, reRender]);


    return (
        <div>
            <Container className="p-2">
                <Row>
                    <Col>
                        <SearchBarWithCriteria
                            setAnimalName={setSearchEntry}
                            animalName={searchEntry}
                            searchOptions ={["Animal Name", "Animal Type"]}
                            setSearchCriteria={setSearchCriteria}
                            searchCriteria={searchCriteria}
                        />
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
