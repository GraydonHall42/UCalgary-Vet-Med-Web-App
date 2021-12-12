import React, {useState, useEffect} from 'react'
import MedicalIssueProfileCard from "../components/MedicalIssueProfileCard";
import IndividualMedicalIssueSet from "../components/IndividualMedicalIssueSet";
import CommentModal from "../components/CommentModal";
import {useParams} from "react-router-dom";
import {Button, Row, Container} from "react-bootstrap";
import axios from 'axios';

const IndividualMedicalIssuePage = (props) => {

    const {medicalIssueId} = useParams();
    const [modalShow, setModalShow] = useState(false);
    const initialMedicalIssueTemplate = {
        "medicalIssueId": 0,
        "animalId": 0,
        "issueName": "",
        "currentStatus": "",
        "openDate": "",
        "closeDate": "",
        "description": "",
        "comments": [
        {
            "commentId": 0,
            "medicalIssueId": 0,
            "title": "",
            "date": "",
            "description": "",
            "commentImages":[
                {
                    "commentPhotoId":0,
                    "commentId":0,
                    "image":""
                }
            ],
            "author": {
                "userId": 0,
                "name": "",
                "email": "",
                "password": "",
                "userType": ""
            }
        }
    ]
    }

    const handleClick = () => {
        setModalShow(true)
    }

    const obtainMedicalIssueById = (medicalIssueId) => {
        axios.get("http://localhost:8080/api/medical/" + medicalIssueId)
        .then(response => {setMedicalIssue(response.data)})
        .catch(error => {
            console.log(error)
        })
    }

    const [medicalIssue, setMedicalIssue] = useState(initialMedicalIssueTemplate);

    useEffect(() => {
        obtainMedicalIssueById(medicalIssueId);
    },[])


    return(
            <Container>
                <MedicalIssueProfileCard medicalIssue={medicalIssue}/>
                <IndividualMedicalIssueSet medicalIssue={medicalIssue}/>
                <Row xl={3} className="justify-content-center pt-2">
                    <Button variant="warning" onClick={() => handleClick()}> Add New Comment </Button>
                </Row>
                <CommentModal
                    props={medicalIssue}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Container>
    )
};

export default IndividualMedicalIssuePage;