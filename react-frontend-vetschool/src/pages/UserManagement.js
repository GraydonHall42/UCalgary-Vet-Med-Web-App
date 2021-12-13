import React, {useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import SearchBarWithCriteria from "../components/SearchBarWithCriteria";
import AnimalSearchResults from "../components/AnimalSearchResult";
import UserSearchResults from "../components/UserSearchResults";
import useAuthorization from '../hooks/useAuthorization';

function Home() {
    const [users, setUsers] = useState([
        {
            id:1,
            fName:"Grady",
            lName:"Hall",
            phone:"123-456-7890",
            email:"grady@gmail.com",
            type:"Student",
            photoPath:"/images/guy1.jpg"
        },
        {
            id:2,
            fName:"Jared",
            lName:"Kraus",
            phone:"234-567-8901",
            email:"jared@gmail.com",
            type:"Vet",
            photoPath:"/images/guy2.jpg"
        },{
            id:3,
            fName:"Deylin",
            lName:"Yiao",
            phone:"345-678-9012",
            email:"deylin@gmail.com",
            type:"admin",
            photoPath:"/images/guy3.jpg"
        }
    ])

    


    return (
        <div>
            <Container className="p-2">
                <Row>
                    <Col>
                        <SearchBarWithCriteria
                            searchOptions ={["User First Name", "User Type"]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UserSearchResults users={users}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
