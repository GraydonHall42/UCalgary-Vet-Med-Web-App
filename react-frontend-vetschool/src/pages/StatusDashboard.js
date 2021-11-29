import React, {useState} from 'react';
import '../styles/StatusDashboard.css';
import {Container, Row, Col, Button, Image } from "react-bootstrap";
import PuppyImage from '../assets/puppy.jpg';

function StatusDashboard() {

    let [animalList, setAnimalList] = useState([
        {
        "animalId": 1,
        "animalName": "Sally",
        "animalType": "Dog",
        "medicalIssues": [
            {
                "medicalIssueId": 1,
                "animalId": 1,
                "issueName": "Scratched Ear",
                "currentStatus": "Green",
                "openDate": "2020-09-01 00:00:00",
                "closeDate": "2020-09-05 00:00:00",
                "description": "Sally Cut her ear and it was bleeding",
                "treatments": [
                    {
                        "treatmentId": 1,
                        "medicalIssueId": 1,
                        "title": "Give Stiches",
                        "date": "2020-09-01 00:00:00",
                        "description": "Gave sally stitches for her cut ear",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 1,
                                "treatmentId": 1,
                                "image": "img13.jpg"
                            },
                            {
                                "treatmentphotoId": 2,
                                "treatmentId": 1,
                                "image": "img14.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    },
                    {
                        "treatmentId": 2,
                        "medicalIssueId": 1,
                        "title": "Remove Stiches",
                        "date": "2020-09-05 00:00:00",
                        "description": "Took out stitches for sally, issue resolved",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 3,
                                "treatmentId": 2,
                                "image": "img15.jpg"
                            },
                            {
                                "treatmentphotoId": 4,
                                "treatmentId": 2,
                                "image": "img16.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    }
                ]
            },
            {
                "medicalIssueId": 2,
                "animalId": 1,
                "issueName": "Broken Leg",
                "currentStatus": "Yellow",
                "openDate": "2021-09-01 00:00:00",
                "closeDate": null,
                "description": "Sally broke leg running",
                "treatments": [
                    {
                        "treatmentId": 3,
                        "medicalIssueId": 2,
                        "title": "Splint broken leg",
                        "date": "2021-09-01 00:00:00",
                        "description": "Gave sally splint for leg. Follow up to check healing in 2 months",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 5,
                                "treatmentId": 3,
                                "image": "img17.jpg"
                            },
                            {
                                "treatmentphotoId": 6,
                                "treatmentId": 3,
                                "image": "img18.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    },
                    {
                        "treatmentId": 4,
                        "medicalIssueId": 2,
                        "title": "Change splint dressing",
                        "date": "2021-10-01 00:00:00",
                        "description": "Changed dressing for Sallys splint",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 7,
                                "treatmentId": 4,
                                "image": "img19.jpg"
                            },
                            {
                                "treatmentphotoId": 8,
                                "treatmentId": 4,
                                "image": "img20.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    }
                ]
            }
        ]
    },
    {
        "animalId": 1,
        "animalName": "Sally",
        "animalType": "Dog",
        "medicalIssues": [
            {
                "medicalIssueId": 1,
                "animalId": 1,
                "issueName": "Scratched Ear",
                "currentStatus": "Green",
                "openDate": "2020-09-01 00:00:00",
                "closeDate": "2020-09-05 00:00:00",
                "description": "Sally Cut her ear and it was bleeding",
                "treatments": [
                    {
                        "treatmentId": 1,
                        "medicalIssueId": 1,
                        "title": "Give Stiches",
                        "date": "2020-09-01 00:00:00",
                        "description": "Gave sally stitches for her cut ear",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 1,
                                "treatmentId": 1,
                                "image": "img13.jpg"
                            },
                            {
                                "treatmentphotoId": 2,
                                "treatmentId": 1,
                                "image": "img14.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    },
                    {
                        "treatmentId": 2,
                        "medicalIssueId": 1,
                        "title": "Remove Stiches",
                        "date": "2020-09-05 00:00:00",
                        "description": "Took out stitches for sally, issue resolved",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 3,
                                "treatmentId": 2,
                                "image": "img15.jpg"
                            },
                            {
                                "treatmentphotoId": 4,
                                "treatmentId": 2,
                                "image": "img16.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    }
                ]
            },
            {
                "medicalIssueId": 2,
                "animalId": 1,
                "issueName": "Broken Leg",
                "currentStatus": "Yellow",
                "openDate": "2021-09-01 00:00:00",
                "closeDate": null,
                "description": "Sally broke leg running",
                "treatments": [
                    {
                        "treatmentId": 3,
                        "medicalIssueId": 2,
                        "title": "Splint broken leg",
                        "date": "2021-09-01 00:00:00",
                        "description": "Gave sally splint for leg. Follow up to check healing in 2 months",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 5,
                                "treatmentId": 3,
                                "image": "img17.jpg"
                            },
                            {
                                "treatmentphotoId": 6,
                                "treatmentId": 3,
                                "image": "img18.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    },
                    {
                        "treatmentId": 4,
                        "medicalIssueId": 2,
                        "title": "Change splint dressing",
                        "date": "2021-10-01 00:00:00",
                        "description": "Changed dressing for Sallys splint",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 7,
                                "treatmentId": 4,
                                "image": "img19.jpg"
                            },
                            {
                                "treatmentphotoId": 8,
                                "treatmentId": 4,
                                "image": "img20.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    }
                ]
            }
        ]
    },
    {
        "animalId": 1,
        "animalName": "Sally",
        "animalType": "Dog",
        "medicalIssues": [
            {
                "medicalIssueId": 1,
                "animalId": 1,
                "issueName": "Scratched Ear",
                "currentStatus": "Green",
                "openDate": "2020-09-01 00:00:00",
                "closeDate": "2020-09-05 00:00:00",
                "description": "Sally Cut her ear and it was bleeding",
                "treatments": [
                    {
                        "treatmentId": 1,
                        "medicalIssueId": 1,
                        "title": "Give Stiches",
                        "date": "2020-09-01 00:00:00",
                        "description": "Gave sally stitches for her cut ear",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 1,
                                "treatmentId": 1,
                                "image": "img13.jpg"
                            },
                            {
                                "treatmentphotoId": 2,
                                "treatmentId": 1,
                                "image": "img14.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    },
                    {
                        "treatmentId": 2,
                        "medicalIssueId": 1,
                        "title": "Remove Stiches",
                        "date": "2020-09-05 00:00:00",
                        "description": "Took out stitches for sally, issue resolved",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 3,
                                "treatmentId": 2,
                                "image": "img15.jpg"
                            },
                            {
                                "treatmentphotoId": 4,
                                "treatmentId": 2,
                                "image": "img16.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    }
                ]
            },
            {
                "medicalIssueId": 2,
                "animalId": 1,
                "issueName": "Broken Leg",
                "currentStatus": "Yellow",
                "openDate": "2021-09-01 00:00:00",
                "closeDate": null,
                "description": "Sally broke leg running",
                "treatments": [
                    {
                        "treatmentId": 3,
                        "medicalIssueId": 2,
                        "title": "Splint broken leg",
                        "date": "2021-09-01 00:00:00",
                        "description": "Gave sally splint for leg. Follow up to check healing in 2 months",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 5,
                                "treatmentId": 3,
                                "image": "img17.jpg"
                            },
                            {
                                "treatmentphotoId": 6,
                                "treatmentId": 3,
                                "image": "img18.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    },
                    {
                        "treatmentId": 4,
                        "medicalIssueId": 2,
                        "title": "Change splint dressing",
                        "date": "2021-10-01 00:00:00",
                        "description": "Changed dressing for Sallys splint",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 7,
                                "treatmentId": 4,
                                "image": "img19.jpg"
                            },
                            {
                                "treatmentphotoId": 8,
                                "treatmentId": 4,
                                "image": "img20.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    }
                ]
            }
        ]
    }])

    let [animalTypeFilter, setAnimalTypeFilter] = useState("");
    let [statusFilter, setStatusFilter] = useState("");

    function getMedicalItem(name, type, issue){
        return (
            <Row className="statusRow">
                <Col>
                    <Button variant="light" className="animalItem">
                        <Row>
                            <Col>
                                <Image className="animalImage" src={PuppyImage} rounded />
                            </Col>
                            <Col>
                                <p className="animalAtt">{name ? name : "Unknown"}</p>
                                <p> the </p>
                                <p className="animalAtt">{type ? type : ""}</p>
                            </Col>
                        </Row>
                    </Button>
                </Col>
                <Col xs={8}>
                    <Button variant="light" className="medicalIssueItem">
                        <Row>
                            <Col className="medicalIssueItemLeft">
                                {issue.issueName}
                            </Col>
                            <Col className="medicalIssueItemRight">
                                {issue.currentStatus}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col className="medicalIssueItemRight">
                                <div>
                                    <p className="closed1" >{issue.closeDate ? "Closed: " : ""}</p>
                                    <p className="closed2">{issue.closeDate ? issue.closeDate : "Active"}</p>
                                </div>
                            </Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
        )

    }


    function getAnimalItem(animal){
        return animal.medicalIssues.map(issue => getMedicalItem(animal.animalName, animal.animalType, issue));
    }

    return (
        <Container className="dashboardContainer">
            <Row className="titleRow">
                <h1>Animal Status Dashboard</h1>
            </Row>
            <Row className="filterRow">
                <Col xs={5}>
                    <label >Animal Type:</label>
                    <input value={animalTypeFilter} onChange={e => setAnimalTypeFilter(e.target.value)} /> 
                </Col>
                <Col xs={5}>
                    <label>Current Status:</label>
                    <input value={statusFilter} onChange={e => setStatusFilter(e.target.value)} /> 
                </Col>
                <Col>
                    <Button variant="warning">Filter</Button>
                </Col>
            </Row>
            <Container className="statusContainer">
                {
                    animalList.map(animal => getAnimalItem(animal))
                }
            </Container>
        </Container>
    )
}

export default StatusDashboard
